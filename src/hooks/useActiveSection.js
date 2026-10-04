import { useEffect, useState } from 'react'

// Tracks which home-page section is in view so navigation can highlight it.
// Returns '' near the top of the page and the last section at the very bottom.
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    const ids = idsKey.split('|')
    let frame = 0

    const update = () => {
      frame = 0

      if (window.scrollY < 150) {
        setActiveSection('')
        return
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (reachedBottom) {
        setActiveSection(ids[ids.length - 1])
        return
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35
      let current = ''

      ids.forEach((id) => {
        const section = document.getElementById(id)

        if (section && section.offsetTop <= scrollPosition) {
          current = id
        }
      })

      setActiveSection(current)
    }

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }

    update()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [idsKey])

  return [activeSection, setActiveSection]
}
