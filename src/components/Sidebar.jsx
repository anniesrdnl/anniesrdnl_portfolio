import { useEffect, useState } from 'react'
import annie from '../assets/annie.png'
import { goToSection } from '../utils/goToSection'

const navigation = [
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 7.5h6l1.6 2H20.5v9.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5V7.5Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 7.5V5.8A1.3 1.3 0 0 1 6.8 4.5h4.4l1.6 2H18a1.5 1.5 0 0 1 1.5 1.5v1.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13h7M7 16h5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'services',
    label: 'Services',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <rect
          x="7"
          y="7"
          width="10"
          height="7"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8 17h8M10 14v3M14 14v3"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'journal',
    label: 'Journal',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4h16M4 20h16M6 4v16M18 4v16"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M9 8h6M12 8v8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M9.5 16h5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'tech-stack',
    label: 'Tech Stack',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="5"
          width="5"
          height="14"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <rect
          x="10"
          y="3"
          width="5"
          height="16"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <rect
          x="16"
          y="7"
          width="4"
          height="12"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M6.5 8v8M12.5 6v10M18 10v6"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="5.5"
          width="18"
          height="13"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M4 7L12 13L20 7"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function Sidebar() {
  const [activeSection, setActiveSection] = useState('')
  const [pressedItem, setPressedItem] = useState('')

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id)

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35

      if (window.scrollY < 150) {
        setActiveSection('')
        return
      }

      let currentSection = ''

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)

        if (
          section &&
          section.offsetTop <= scrollPosition
        ) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener(
      'scroll',
      updateActiveSection,
      {
        passive: true,
      }
    )

    window.addEventListener(
      'resize',
      updateActiveSection
    )

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      )

      window.removeEventListener(
        'resize',
        updateActiveSection
      )
    }
  }, [])

  const scrollToSection = (id) => {
    setPressedItem(id)

    window.setTimeout(() => {
      setPressedItem('')
    }, 300)

    goToSection(id)
  }

  const scrollHome = () => {
    setActiveSection('')
    goToSection('home')
  }

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[300px] border-r border-slate-200 bg-[#f8f9fa] lg:flex lg:flex-col">
      <div className="flex h-full min-h-0 flex-col px-[25px] pb-[34px] pt-[40px]">
        <button
          type="button"
          onClick={scrollHome}
          className="sidebar-brand w-fit border-0 bg-transparent p-0 text-left"
          aria-label="Go to home"
        >
          <img
            src={annie}
            alt="Annie"
            className="h-[44px] w-[44px] rounded-full border border-slate-900 object-cover"
          />

          <div className="sidebar-brand-text mt-[8px] font-mono text-[22px] leading-none text-slate-950">
            annie
          </div>
        </button>

        <nav
          className="mt-[56px] flex flex-col gap-[17px]"
          aria-label="Portfolio navigation"
        >
          {navigation.map((item) => {
            const isActive =
              activeSection === item.id

            const isPressed =
              pressedItem === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  scrollToSection(item.id)
                }
                className={[
                  'sidebar-nav-item',
                  'group flex h-[26px] w-fit items-center gap-[8px] border-0 bg-transparent p-0 text-left',
                  isActive
                    ? 'sidebar-nav-active'
                    : '',
                  isPressed
                    ? 'sidebar-nav-pressed'
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={
                  isActive
                    ? 'page'
                    : undefined
                }
              >
                <span
                  className={[
                    'sidebar-nav-icon',
                    'flex h-[26px] w-[26px] shrink-0 items-center justify-center bg-transparent',
                    isActive
                      ? 'text-slate-950'
                      : 'text-slate-600',
                  ].join(' ')}
                >
                  <span className="block h-[26px] w-[26px]">
                    {item.icon}
                  </span>
                </span>

                <span className="sidebar-nav-label font-mono text-[16px] leading-none text-slate-700">
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto w-full">
          <p className="m-0 text-[13px] leading-[18px] text-slate-900">
            Let's work on that idea!
          </p>

          <p className="mb-0 mt-[7px] text-[13px] leading-[18px] text-slate-500">
            Reach me at
          </p>

          <a
            href="mailto:anniesardiniola@gmail.com"
            className="sidebar-email-icon mt-[13px] flex h-[20px] w-[24px] items-center justify-center text-slate-900"
            aria-label="Email Annie"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="21"
                height="17"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.4"
              />

              <path
                d="M2.5 3L12 10.5L21.5 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="mailto:anniesardiniola@gmail.com"
            className="sidebar-email mt-[11px] block w-fit max-w-full font-mono text-[13px] leading-[17px] text-slate-600 no-underline"
          >
            anniesardiniola@gmail.com
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar