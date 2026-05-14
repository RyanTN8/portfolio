import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
}

export default function FadeUp({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay * 80)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  )
}
