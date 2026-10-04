import { useRef, useState } from 'react'
import PixelIcon from './PixelIcon'
import { serviceIcons } from '../data/serviceIcons'

const ARROW_STEPS = {
  ArrowLeft: -1,
  ArrowRight: 1,
}

function ServiceTabs({ services }) {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug)
  const tabRefs = useRef([])

  const selected =
    services.find((service) => service.slug === selectedSlug) ?? services[0]

  const selectTab = (index) => {
    setSelectedSlug(services[index].slug)
    tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event, index) => {
    if (event.key in ARROW_STEPS) {
      event.preventDefault()
      selectTab((index + ARROW_STEPS[event.key] + services.length) % services.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      selectTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      selectTab(services.length - 1)
    }
  }

  if (!selected) {
    return null
  }

  const selectedIndex = services.indexOf(selected)
  const selectedIcon = serviceIcons[selected.slug]

  const step = (delta) => {
    const next = (selectedIndex + delta + services.length) % services.length
    setSelectedSlug(services[next].slug)
  }

  return (
    <div className="service-tabs">
      <div className="service-tablist" role="tablist" aria-label="Services">
        {services.map((service, index) => {
          const isSelected = service.slug === selected.slug
          const icon = serviceIcons[service.slug]

          return (
            <button
              key={service.slug}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              id={`service-tab-${service.slug}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls="service-panel"
              tabIndex={isSelected ? 0 : -1}
              className={`service-tab ${isSelected ? 'is-selected' : ''}`}
              onClick={() => setSelectedSlug(service.slug)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="service-tab-tile">
                {icon && (
                  <PixelIcon
                    frames={icon.frames}
                    rest={icon.rest}
                    playing={isSelected}
                  />
                )}
              </span>

              <span className="service-tab-label">
                {service.title.toLowerCase()}
              </span>
            </button>
          )
        })}
      </div>

      <div
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${selected.slug}`}
        className="service-card"
      >
        <div key={selected.slug} className="service-card-content">
          {selectedIcon && (
            <span className="service-card-icon">
              <PixelIcon
                frames={selectedIcon.frames}
                rest={selectedIcon.rest}
                playing
              />
            </span>
          )}

          <h3>{selected.title}</h3>

          <p>{selected.description}</p>

          <ul className="service-card-offerings">
            {selected.offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
        </div>

        <div className="service-card-footer">
          <a
            href={`#service/${selected.slug}`}
            className="section-action service-card-link font-mono"
          >
            <span className="section-action-arrow">&gt;</span>
            <span>see how I work</span>
            <span className="section-action-cursor">_</span>
          </a>

          <div className="service-card-nav">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => step(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m14.5 6-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next service"
              onClick={() => step(1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9.5 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTabs
