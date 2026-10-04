const ICONS = {
  projects: (
    <>
      <path d="M9.5 14V4.5h16l4 4v21h-20v-2.5" />
      <path d="M24.5 4.5h1l4 4v1h-5Z" fill="currentColor" />
      <rect x="15" y="10" width="1.6" height="1.6" fill="currentColor" stroke="none" />
      <rect x="20" y="10" width="1.6" height="1.6" fill="currentColor" stroke="none" />
      <path d="M16.5 13.4h3" />
      <path d="M4.5 18.5v-4H11l1.5 2h12.8l3.7 7.5" />
      <path d="m4.5 18.5 5 9" />
    </>
  ),
  services: (
    <>
      <rect x="6.5" y="3.5" width="20" height="16" rx="1" />
      <rect x="9.5" y="5.5" width="15" height="12" />
      <path d="M14.5 9v1.5M19.5 9v1.5" />
      <path d="M14.5 12v.6c0 .8.6 1.4 1.4 1.4h2.2c.8 0 1.4-.6 1.4-1.4V12" />
      <path d="M9.5 19.5v3M24.5 19.5v3" />
      <rect x="5.5" y="22.5" width="22" height="6" />
      <rect x="9" y="24.3" width="2.2" height="2.2" fill="currentColor" stroke="none" />
      <path d="M19 25h5" />
    </>
  ),
  journal: (
    <>
      <rect x="7" y="7" width="20" height="20" />
      <rect x="5.25" y="5.25" width="3.5" height="3.5" fill="currentColor" stroke="none" />
      <rect x="25.25" y="5.25" width="3.5" height="3.5" fill="currentColor" stroke="none" />
      <rect x="5.25" y="25.25" width="3.5" height="3.5" fill="currentColor" stroke="none" />
      <rect x="25.25" y="25.25" width="3.5" height="3.5" fill="currentColor" stroke="none" />
      <path d="M11.5 13.5v-2h11v2M17 11.5V23.5M14 23.5h6" />
    </>
  ),
  tech: (
    <>
      <path d="M4.5 28.5h24.5" />
      <path d="M4.5 28.5V20h12.5M10.5 20v8.5M16.5 20v8.5" />
      <path d="M6 14h1.5v6H4.2v-3Z" fill="currentColor" stroke="none" />
      <rect x="6.8" y="22.8" width="2" height="2" fill="currentColor" stroke="none" />
      <rect x="12.8" y="22.8" width="2" height="2" fill="currentColor" stroke="none" />
      <path d="M7 20V5.5h3.5V20" />
      <path d="M10.5 4.5h5V20M13.2 19V7.5h2.3" />
      <path d="M15.5 4V3.5h11.3V8M19.5 5v1.5" />
      <path d="M22.5 8.5H29v20M22.5 8.5 17.5 19.5" />
      <path d="M22 18v.8M26 18v.8" />
      <path d="M22 20.5v.4c0 .8.6 1.4 1.4 1.4h1.2c.8 0 1.4-.6 1.4-1.4v-.4" />
    </>
  ),
  contact: (
    <>
      <rect x="4.5" y="5.8" width="25" height="20.2" rx="2.5" />
      <path d="m6.5 9 9 8.6c.9.8 2.1.8 3 0l9-8.6" />
      <path d="m7.5 23 7-6M26.5 23l-7-6" />
    </>
  ),
}

function NavIcon({ name }) {
  return (
    <svg
      viewBox="3 2 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

export default NavIcon
