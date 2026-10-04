import { useState } from 'react'
import BrandButton from './BrandButton'
import NavIcon from './NavIcon'
import { navigation } from '../data/portfolio'
import { goToSection } from '../utils/goToSection'

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
                  <NavIcon name={item.icon} />
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
                <NavIcon name={item.icon} />
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