import { Canvas } from '@react-three/fiber'
import { GlassPrism } from './GlassPrism'

export default function HeroPrism() {
  return (
    <div className="hero-prism" role="img" aria-label="A rotating glass geometric form">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 40 }} dpr={[1, 1.5]}>
        <GlassPrism
          shape="icosahedron"
          speed={1.0}
          tint="#5a5348"
          chromaticAberration={0.08}
          distortion={0.15}
          floatIntensity={0.45}
        />
      </Canvas>
    </div>
  )
}
