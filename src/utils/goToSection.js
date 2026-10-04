// Scrolls to a home-page section. From a project or journal page the section
// isn't rendered, so set the hash instead and let App switch back and scroll.
export function goToSection(id) {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    return
  }

  if (window.location.hash === `#${id}`) {
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  } else {
    window.location.hash = id
  }
}

// Returns to the very top of the home page and clears any section hash,
// so a refresh after clicking home doesn't jump back to that section
export function goHome() {
  const homeUrl = window.location.pathname + window.location.search

  if (document.getElementById('home')) {
    if (window.location.hash) {
      window.history.replaceState(null, '', homeUrl)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  if (window.location.hash) {
    window.history.pushState(null, '', homeUrl)
  }

  window.dispatchEvent(new HashChangeEvent('hashchange'))
}
