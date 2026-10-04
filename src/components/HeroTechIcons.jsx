import {
  siCss,
  siFigma,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siPython,
  siSupabase,
  siTypescript,
  siVercel,
} from 'simple-icons'

// x/y place each icon on desktop and tablet, mx/my on phones (percent of the hero)
const TECH_ICONS = [
  { icon: siFigma, x: 11, y: 11, mx: 10, my: 6, radius: 14, duration: 11 },
  { icon: siHtml5, x: 31, y: 6, mx: 50, my: 5, radius: 12, duration: 9, reverse: true },
  { icon: siCss, x: 69, y: 7, mx: 90, my: 6, radius: 13, duration: 10 },
  { icon: siJavascript, x: 89, y: 13, mx: 11, my: 65, radius: 14, duration: 12, reverse: true },
  { icon: siTypescript, x: 95, y: 49, mx: 37, my: 71, radius: 12, duration: 10 },
  { icon: siGithub, x: 88, y: 82, mx: 89, my: 71, radius: 14, duration: 11, reverse: true },
  { icon: siVercel, x: 66, y: 91, mx: 40, my: 94, radius: 12, duration: 9 },
  { icon: siMysql, x: 34, y: 89, mx: 63, my: 65, radius: 13, duration: 12, reverse: true, scale: 1.5 },
  { icon: siSupabase, x: 9, y: 79, mx: 14, my: 91, radius: 14, duration: 10 },
  { icon: siPython, x: 5, y: 52, mx: 67, my: 91, radius: 12, duration: 11, reverse: true },
]

function HeroTechIcons() {
  return (
    <div className="hero-tech" aria-hidden="true">
      {TECH_ICONS.map(({ icon, x, y, mx, my, radius, duration, reverse, scale = 1 }, index) => (
        <span
          key={icon.slug}
          className="hero-tech-icon"
          title={icon.title}
          style={{
            '--x': `${x}%`,
            '--y': `${y}%`,
            '--mx': `${mx}%`,
            '--my': `${my}%`,
            '--scale': scale,
            '--radius': `${radius}px`,
            '--duration': `${duration}s`,
            '--phase': `${-index * 1.7}s`,
            '--enter-delay': `${index * 70}ms`,
            '--brand': `#${icon.hex}`,
          }}
        >
          <span
            className={`hero-tech-orbit ${reverse ? 'is-reverse' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={icon.path} />
            </svg>
          </span>
        </span>
      ))}
    </div>
  )
}

export default HeroTechIcons
