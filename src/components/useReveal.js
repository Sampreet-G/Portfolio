import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.IntersectionObserver) return
    if (ref.current) {
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(24px)'
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (ref.current) {
          ref.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'none'
        }
        obs.disconnect()
      }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return { ref }
}