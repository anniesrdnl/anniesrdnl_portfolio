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
