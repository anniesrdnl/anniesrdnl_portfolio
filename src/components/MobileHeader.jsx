import { useEffect, useRef, useState } from 'react'
import BrandButton from './BrandButton'
import NavIcon from './NavIcon'
import { navigation } from '../data/portfolio'
import { goToSection } from '../utils/goToSection'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = navigation.map((item) => item.id)

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const closeMenu = () => setMenuOpen(false)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    desktopQuery.addEventListener('change', closeMenu)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      desktopQuery.removeEventListener('change', closeMenu)
    }
  }, [menuOpen])

  const scrollToSection = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
    goToSection(id)
  }

  const resetNavigation = () => {
    setActiveSection('')
    setMenuOpen(false)
  }

  return (
    <>
      <header ref={headerRef} className="mobile-header">
        <BrandButton
          onClick={resetNavigation}
          className="mobile-brand"
          imageClassName="mobile-brand-image"
          nameClassName="mobile-brand-name"
        />

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? 'mobile-menu-button-open' : ''
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}
        >
          <nav className="mobile-menu-navigation" aria-label="Menu">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobile-menu-item"
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                <span className="mobile-menu-item-icon">
                  <NavIcon name={item.icon} />
                </span>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className="mobile-bottom-nav-inner">
          {navigation.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                className={`mobile-bottom-nav-item ${
                  isActive ? 'mobile-bottom-nav-item-active' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="mobile-bottom-nav-icon">
                  <NavIcon name={item.icon} />
                </span>

                <span className="mobile-bottom-nav-label">
                  {item.label.toLowerCase()}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default MobileHeader
