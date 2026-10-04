import { useState } from 'react'
import BrandButton from './BrandButton'
import NavIcon from './NavIcon'
import { navigation } from '../data/portfolio'
import { goToSection } from '../utils/goToSection'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = navigation.map((item) => item.id)

function Sidebar() {
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS)
  const [pressedItem, setPressedItem] = useState('')

  const scrollToSection = (id) => {
    setPressedItem(id)

    window.setTimeout(() => {
      setPressedItem('')
    }, 300)

    goToSection(id)
  }

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-dvh w-(--sidebar-width) overflow-y-auto border-r border-slate-200 bg-[#f8f9fa] lg:flex lg:flex-col">
      <div className="flex min-h-full flex-col px-[25px] pb-[34px] pt-[40px] max-xl:px-[22px]">
        <BrandButton
          onClick={() => setActiveSection('')}
          className="flex w-fit flex-col items-start text-left"
          imageClassName="h-[44px] w-[44px] rounded-full border border-slate-900 object-cover"
          nameClassName="mt-[8px] font-mono text-[22px] leading-none text-slate-950"
        />

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
                <span className="sidebar-nav-icon flex h-[26px] w-[26px] shrink-0 items-center justify-center bg-transparent">
                  <NavIcon name={item.icon} />
                </span>

                <span className="sidebar-nav-label font-mono text-[16px] leading-none">
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