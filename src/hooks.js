import { useEffect, useRef, useState } from 'react'

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

// Fades an element in the first time it scrolls into view.
// Content is shown straight away for visitors who ask for reduced motion.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible || !ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible, threshold])

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(24px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  }
  return [ref, style]
}
