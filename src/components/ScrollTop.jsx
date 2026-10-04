import { useEffect, useState } from 'react'
import { scrollBehavior } from '../utils/goToSection'

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior(),
    })
  }

  return (
    <button
      type="button"
      className={`scroll-top-button ${
        visible ? 'scroll-top-button-visible' : ''
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m7 14 5-5 5 5" />
      </svg>
    </button>
  )
}

export default ScrollTop