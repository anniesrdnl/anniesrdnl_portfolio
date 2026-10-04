import { useRef, useState } from 'react'
import PixelIcon from './PixelIcon'
import TechPill from './TechPill'
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
        key={selected.slug}
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${selected.slug}`}
        className="service-panel"
      >
        <h3>{selected.title}</h3>

        <p>{selected.description}</p>

        <div className="service-panel-tools">
          {selected.tools.map((tool) => (
            <TechPill key={tool}>{tool}</TechPill>
          ))}
        </div>

        <a
          href={`#service/${selected.slug}`}
          className="section-action service-panel-link font-mono"
        >
          <span className="section-action-arrow">&gt;</span>
          <span>see how I work</span>
          <span className="section-action-cursor">_</span>
        </a>
      </div>
    </div>
  )
}

export default ServiceTabs
