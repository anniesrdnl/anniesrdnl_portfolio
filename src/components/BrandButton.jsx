import { useState } from 'react'
import annie from '../assets/annie.png'
import { goHome } from '../utils/goToSection'

function BrandButton({ className = '', imageClassName = '', nameClassName = '', onClick }) {
  const [pulse, setPulse] = useState(0)

  const handleClick = () => {
    setPulse((current) => current + 1)
    onClick?.()
    goHome()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`brand-button ${className}`}
      aria-label="Go to home"
    >
      <span className="brand-avatar">
        <img src={annie} alt="" className={imageClassName} />

        {pulse > 0 && (
          <span key={pulse} className="brand-ring" aria-hidden="true" />
        )}
      </span>

      <span className={`brand-name ${nameClassName}`}>annie</span>
    </button>
  )
}

export default BrandButton
