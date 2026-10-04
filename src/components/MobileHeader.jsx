import { useState } from 'react'
import BrandButton from './BrandButton'
import { navigation } from '../data/portfolio'
import { goToSection } from '../utils/goToSection'

function NavIcon({ type }) {
  if (type === 'projects') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7.5h6l1.6 2H21v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z" />
        <path d="M3 7.5V5a2 2 0 0 1 2-2h4l1.5 2H19a2 2 0 0 1 2 2v2.5" />
        <path d="M7 13h10" />
        <path d="M7 16h7" />
      </svg>
    )
  }

  if (type === 'services') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="16" rx="1.5" />
        <rect x="7" y="6" width="10" height="7" />
        <path d="M7 16h10" />
        <path d="M9 21h6" />
        <path d="M12 19v2" />
      </svg>
    )
  }

  if (type === 'journal') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 3h16" />
        <path d="M4 21h16" />
        <path d="M6 3v18" />
        <path d="M18 3v18" />
        <path d="M9 7h6" />
        <path d="M12 7v10" />
        <path d="M9 17h6" />
      </svg>
    )
  }

  if (type === 'tech') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="8" width="4" height="12" />
        <rect x="10" y="4" width="4" height="16" />
        <rect x="17" y="6" width="4" height="14" />
        <path d="M5 5v3" />
        <path d="M12 2v2" />
        <path d="M19 3v3" />
        <path d="M4 17h2" />
        <path d="M11 9h2" />
        <path d="M18 12h2" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
      />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  const scrollToSection = (id) => {
    setActiveItem(id)
    setMenuOpen(false)
    goToSection(id)
  }

  const resetNavigation = () => {
    setActiveItem('home')
    setMenuOpen(false)
  }

  return (
    <>
      <header className="mobile-header">
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
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`mobile-menu ${
            menuOpen ? 'mobile-menu-open' : ''
          }`}
        >
          <nav className="mobile-menu-navigation">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobile-menu-item"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="mobile-menu-item-icon">
                  <NavIcon type={item.icon} />
                </span>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <nav
        className="mobile-bottom-nav"
        aria-label="Mobile navigation"
      >
        <div className="mobile-bottom-nav-inner">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-bottom-nav-item ${
                activeItem === item.id
                  ? 'mobile-bottom-nav-item-active'
                  : ''
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="mobile-bottom-nav-icon">
                <NavIcon type={item.icon} />
              </span>

              <span className="mobile-bottom-nav-label">
                {item.label.toLowerCase()}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MobileHeader