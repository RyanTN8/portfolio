// GlassPrism — cinematic glass dispersion hero: a slowly rotating crystal with
// real refraction (MeshTransmissionMaterial), chromatic aberration, a fresnel
// rim glow, and an in-file light rig that bends warm/cool gradients and a lime
// accent strip through the glass. Must be rendered inside a react-three-fiber
// <Canvas>.
//
// Usage:
//   <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
//     <color attach="background" args={['#0a0a0a']} />
//     <GlassPrism />
//   </Canvas>
//
// Install:
//   npx facet3d add glass-prism
//
// Dependencies: three, @react-three/fiber, @react-three/drei
// (self-contained light rig via <Environment> + <Lightformer> — no HDR files).
'use client'

import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
} from '@react-three/drei'

export interface GlassPrismProps {
  /** Crystal geometry: triangular prism, torus knot, or icosahedron. */
  shape?: 'prism' | 'torusknot' | 'icosahedron'
  /** Rotation speed multiplier, 0–2. */
  speed?: number
  /** Index of refraction, 1–2.5 (glass ≈ 1.5, diamond ≈ 2.4). */
  ior?: number
  /** RGB split strength inside the glass, 0–1. */
  chromaticAberration?: number
  /** Accent color for the rim glow and the light-rig strip. */
  tint?: string
  /** Vertical bobbing amplitude, 0–3. */
  floatIntensity?: number
  /** Surface noise distortion of the refraction, 0–1. */
  distortion?: number
  /** Lerp the crystal toward the pointer. */
  parallax?: boolean
}

// Faceted geometries are rebuilt as non-indexed so every face gets a true
// flat normal — that's what makes the refraction read as cut crystal.
function buildGeometry(shape: NonNullable<GlassPrismProps['shape']>): THREE.BufferGeometry {
  switch (shape) {
    case 'torusknot':
      return new THREE.TorusKnotGeometry(0.85, 0.26, 220, 36)
    case 'icosahedron': {
      const geo = new THREE.IcosahedronGeometry(1.25, 0).toNonIndexed()
      geo.computeVertexNormals()
      return geo
    }
    case 'prism':
    default: {
      const geo = new THREE.CylinderGeometry(1.05, 1.05, 2.3, 3, 1, false).toNonIndexed()
      geo.computeVertexNormals()
      return geo
    }
  }
}

export function GlassPrism({
  shape = 'prism',
  speed = 0.4,
  ior = 1.5,
  chromaticAberration = 0.3,
  tint = '#a3e635',
  floatIntensity = 1,
  distortion = 0.2,
  parallax = true,
}: GlassPrismProps) {
  const groupRef = useRef<THREE.Group>(null)
  const spinRef = useRef<THREE.Group>(null)

  const s = THREE.MathUtils.clamp(speed, 0, 2)
  const iorClamped = THREE.MathUtils.clamp(ior, 1, 2.5)
  const ca = THREE.MathUtils.clamp(chromaticAberration, 0, 1)
  const floatI = THREE.MathUtils.clamp(floatIntensity, 0, 3)
  const dist = THREE.MathUtils.clamp(distortion, 0, 1)

  const geometry = useMemo(() => buildGeometry(shape), [shape])
  const wireframe = useMemo(() => new THREE.WireframeGeometry(geometry), [geometry])
  const tintColor = useMemo(() => new THREE.Color(tint), [tint])
  const bodyColor = useMemo(() => new THREE.Color('#d0cbc2'), [])

  useEffect(() => {
    return () => {
      geometry.dispose()
      wireframe.dispose()
    }
  }, [geometry, wireframe])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const spin = spinRef.current
    if (spin) {
      // Slow elegant tumble: steady yaw plus a gentle sinusoidal lean.
      spin.rotation.y += delta * s * 0.6
      spin.rotation.x = Math.sin(t * 0.25) * 0.18 * Math.min(s * 2.5, 1)
      spin.rotation.z = Math.cos(t * 0.2) * 0.1 * Math.min(s * 2.5, 1)
    }

    const group = groupRef.current
    if (group) {
      // Pointer parallax: damped tilt of the whole assembly. When disabled,
      // ease back to neutral so toggling the prop never snaps.
      const targetY = parallax ? state.pointer.x * 0.25 : 0
      const targetX = parallax ? -state.pointer.y * 0.18 : 0
      group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetY, 3, delta)
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetX, 3, delta)
    }
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={1.4}
        rotationIntensity={0.25 * Math.min(floatI, 1)}
        floatIntensity={floatI}
        floatingRange={[-0.12, 0.12]}
      >
        {/* Spin group carries BOTH the crystal and its rim shell so the
            fresnel tracks the facets as they tumble. */}
        <group ref={spinRef}>
          <mesh geometry={geometry}>
            <MeshTransmissionMaterial
              transmission={1}
              thickness={1.1}
              roughness={0.2}
              ior={iorClamped}
              chromaticAberration={ca}
              anisotropicBlur={0.45}
              distortion={dist}
              distortionScale={0.4}
              temporalDistortion={0.08}
              samples={6}
              resolution={1024}
              clearcoat={0.35}
              clearcoatRoughness={0.4}
              envMapIntensity={0.65}
              background={bodyColor}
              attenuationColor="#888278"
              attenuationDistance={2.5}
            />
          </mesh>
          <lineSegments geometry={wireframe} scale={1.038} raycast={() => null}>
            <lineBasicMaterial color={tintColor} transparent opacity={0.58} depthWrite={false} />
          </lineSegments>
        </group>
      </Float>

      {/* Self-contained light rig: gradient panels the crystal can bend.
          Warm key from the left, cool fill from the right, a white overhead
          strip for specular life, and the lime accent that streaks through
          the glass as it turns. No external HDR files. */}
      <Environment resolution={256}>
        <color attach="background" args={['#faf8f3']} />
        {/* Large dim fill behind the crystal so the glass body refracts a soft
            gradient instead of pure black — this is what keeps it reading as
            glass rather than a silhouette. */}
        <Lightformer
          form="rect"
          intensity={0.55}
          color="#6b7590"
          position={[0, 0, -10]}
          scale={[12, 9, 1]}
        />
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer form="circle" intensity={5} position={[0, 5, -9]} scale={2} />
          <Lightformer
            form="rect"
            intensity={4}
            color="#ffd9a0"
            position={[-5, 1, -1]}
            scale={[3, 6, 1]}
          />
          <Lightformer
            form="rect"
            intensity={3.5}
            color="#8fb8ff"
            position={[5, -1, -1]}
            scale={[3, 6, 1]}
          />
          <Lightformer
            form="rect"
            intensity={3}
            color={tintColor}
            position={[0, -5, 2]}
            scale={[8, 0.6, 1]}
          />
          <Lightformer
            form="rect"
            intensity={2}
            color="#ffffff"
            position={[0, 5, 1]}
            scale={[6, 1, 1]}
          />
        </group>
      </Environment>
    </group>
  )
}
