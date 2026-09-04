'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scrollPos > 150) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true })
    document.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()

    return () => {
      window.removeEventListener('scroll', checkScroll)
      document.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!show) return null

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '25px',
        zIndex: 999999,
        backgroundColor: '#16382b',
        color: '#ffffff',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <ArrowUp size={22} />
    </button>
  )
}