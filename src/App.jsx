import { useEffect, useState } from 'react'
import annie from './assets/annie.png'

import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import ProjectCard from './components/ProjectCard'
import ServiceCard from './components/ServiceCard'
import SectionHeading from './components/SectionHeading'
import TechPill from './components/TechPill'
import ScrollTop from './components/ScrollTop'

import {
  projects,
  services,
  journals,
  stack,
} from './data/portfolio'

import './App.css'

// Hand-placed confetti: start x (% of name), burst offset, spin, shape, delay
const CONFETTI = [
  { x: 8, dx: -26, dy: -34, r: 160, shape: 'bar', delay: 0 },
  { x: 18, dx: -12, dy: -48, r: -120, shape: 'dot', delay: 60 },
  { x: 30, dx: -6, dy: -40, r: 200, shape: 'bar', delay: 120 },
  { x: 42, dx: 4, dy: -54, r: -180, shape: 'dot', delay: 30 },
  { x: 52, dx: -4, dy: -44, r: 140, shape: 'bar', delay: 90 },
  { x: 62, dx: 8, dy: -50, r: -160, shape: 'dot', delay: 150 },
  { x: 74, dx: 12, dy: -38, r: 220, shape: 'bar', delay: 45 },
  { x: 84, dx: 18, dy: -46, r: -140, shape: 'dot', delay: 105 },
  { x: 94, dx: 28, dy: -32, r: 180, shape: 'bar', delay: 75 },
]

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedJournal, setSelectedJournal] = useState(null)

  const firstText = "Hello! I'm"
  const nameText = 'Annie'
  const secondText =
    'I design, build, and ship products end to end.'

  const [typedFirst, setTypedFirst] = useState('')
  const [typedName, setTypedName] = useState('')
  const [typedSecond, setTypedSecond] = useState('')
  const [typingStage, setTypingStage] = useState('first')

  useEffect(() => {
    let timeout

    if (typingStage === 'first') {
      if (typedFirst.length < firstText.length) {
        timeout = window.setTimeout(() => {
          setTypedFirst(
            firstText.slice(0, typedFirst.length + 1),
          )
        }, 115)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('name')
        }, 250)
      }
    }

    if (typingStage === 'name') {
      if (typedName.length < nameText.length) {
        timeout = window.setTimeout(() => {
          setTypedName(
            nameText.slice(0, typedName.length + 1),
          )
        }, 130)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('second')
        }, 400)
      }
    }

    if (typingStage === 'second') {
      if (typedSecond.length < secondText.length) {
        timeout = window.setTimeout(() => {
          setTypedSecond(
            secondText.slice(0, typedSecond.length + 1),
          )
        }, 70)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('pause')
        }, 2200)
      }
    }

    if (typingStage === 'pause') {
      timeout = window.setTimeout(() => {
        setTypingStage('deleteSecond')
      }, 300)
    }

    if (typingStage === 'deleteSecond') {
      if (typedSecond.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedSecond(
            secondText.slice(0, typedSecond.length - 1),
          )
        }, 30)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('deleteName')
        }, 150)
      }
    }

    if (typingStage === 'deleteName') {
      if (typedName.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedName(
            nameText.slice(0, typedName.length - 1),
          )
        }, 45)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('deleteFirst')
        }, 150)
      }
    }

    if (typingStage === 'deleteFirst') {
      if (typedFirst.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedFirst(
            firstText.slice(0, typedFirst.length - 1),
          )
        }, 45)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('restart')
        }, 500)
      }
    }

    if (typingStage === 'restart') {
      timeout = window.setTimeout(() => {
        setTypingStage('first')
      }, 500)
    }

    return () => {
      window.clearTimeout(timeout)
    }
  }, [
    typedFirst,
    typedName,
    typedSecond,
    typingStage,
  ])

  const scrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  const toggleProjects = () => {
    const willCollapse = showAllProjects

    setShowAllProjects((current) => !current)

    if (willCollapse) {
      window.setTimeout(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      }, 100)
    }
  }

  const openJournal = (journal) => {
    setSelectedJournal(journal)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const closeJournal = () => {
    setSelectedJournal(null)

    window.setTimeout(() => {
      document
        .getElementById('journal')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 50)
  }

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 2)

  const cursorIsFirst =
    typingStage === 'first' ||
    typingStage === 'deleteFirst' ||
    typingStage === 'restart'

  const cursorIsName =
    typingStage === 'name' ||
    typingStage === 'deleteName'

  const nameIsComplete =
    typedName.length === nameText.length

  const cursorIsSecond =
    typingStage === 'second' ||
    typingStage === 'pause' ||
    typingStage === 'deleteSecond'

  if (selectedJournal) {
    return (
      <div className="portfolio-app">
        <Sidebar />
        <MobileHeader />

        <main className="portfolio-main journal-reader-main">
          <article className="journal-reader">
            <button
              type="button"
              className="journal-back"
              onClick={closeJournal}
            >
              <span className="journal-back-arrow">
                ←
              </span>
              <span>back to journal</span>
            </button>

            <header className="journal-reader-header">
              <h1>{selectedJournal.title}</h1>

              <time>{selectedJournal.date}</time>
            </header>

            <div className="journal-author">
              <img
                src={annie}
                alt="Annie Sardiniola"
              />

              <span>Annie Sardiniola</span>
            </div>

            <div className="journal-body">
              {selectedJournal.content?.map(
                (block, index) => {
                  if (block.type === 'heading') {
                    return (
                      <h2 key={index}>
                        {block.text}
                      </h2>
                    )
                  }

                  return (
                    <p key={index}>
                      {block.text}
                    </p>
                  )
                },
              )}
            </div>
          </article>
        </main>

        <ScrollTop />
      </div>
    )
  }

  return (
    <div className="portfolio-app">
      <Sidebar />
      <MobileHeader />

      <main className="portfolio-main">
        <section
          id="home"
          className="home-section dot-grid"
        >
          <div className="home-inner">
            <div className="hero-intro">
              <h1 className="hero-hello">
                {typedFirst}

                {cursorIsFirst && (
                  <span className="typing-cursor">
                    |
                  </span>
                )}
              </h1>

              <img
                src={annie}
                alt="Annie"
                className="hero-profile"
              />

              <span
                className={`hero-name ${
                  nameIsComplete ? 'is-complete' : ''
                }`}
              >
                <span className="hero-name-text">
                  {typedName}
                </span>

                {nameIsComplete && (
                  <span
                    className="hero-confetti"
                    aria-hidden="true"
                  >
                    {CONFETTI.map((piece, index) => (
                      <span
                        key={index}
                        className={`hero-confetti-piece is-${piece.shape}`}
                        style={{
                          '--x': `${piece.x}%`,
                          '--dx': `${piece.dx}px`,
                          '--dy': `${piece.dy}px`,
                          '--r': `${piece.r}deg`,
                          '--delay': `${piece.delay}ms`,
                        }}
                      />
                    ))}
                  </span>
                )}

                {cursorIsName && (
                  <span className="typing-cursor">
                    |
                  </span>
                )}
              </span>
            </div>

            <p className="hero-description">
              {typedSecond}

              {cursorIsSecond && (
                <span className="typing-cursor">
                  |
                </span>
              )}
            </p>

            <div className="hero-skills">
              <div className="hero-floating-skill hero-floating-skill-1">
                <TechPill>
                  Full Stack
                </TechPill>
              </div>

              <div className="hero-floating-skill hero-floating-skill-2">
                <TechPill>
                  Web Development
                </TechPill>
              </div>

              <div className="hero-floating-skill hero-floating-skill-3">
                <TechPill>
                  Product Design
                </TechPill>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToProjects}
              className="hero-button"
            >
              <span className="hero-button-arrow">
                &gt;
              </span>

              <span className="hero-button-text">
                View my projects
              </span>

              <span className="hero-button-cursor">
                _
              </span>
            </button>
          </div>
        </section>

        <section
          id="projects"
          className="projects-section"
        >
          <div className="projects-inner">
            <SectionHeading
              number="01"
              title="projects"
              action={
                showAllProjects
                  ? 'show less _'
                  : 'view all _'
              }
              onAction={toggleProjects}
            />

            <div className="projects-grid">
              {visibleProjects.map(
                (project, index) => (
                  <div
                    key={project.id}
                    className={`project-wrapper ${
                      showAllProjects &&
                      index >= 2
                        ? 'project-reveal'
                        : ''
                    }`}
                  >
                    <ProjectCard
                      project={project}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="content-section"
        >
          <div className="content-inner">
            <SectionHeading
              number="02"
              title="services"
            />

            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="journal"
          className="content-section"
        >
          <div className="content-inner">
            <SectionHeading
              number="03"
              title="journal"
            />

            <div className="journal-list">
              {journals.map((journal) => (
                <button
                  key={journal.title}
                  type="button"
                  className="journal-entry"
                  onClick={() =>
                    openJournal(journal)
                  }
                >
                  <div className="journal-entry-content">
                    <h3>
                      {journal.title}
                    </h3>

                    <p>
                      {journal.excerpt}
                    </p>
                  </div>

                  <div className="journal-entry-meta">
                    <time>
                      {journal.date}
                    </time>

                    <span className="journal-entry-arrow">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tech-stack"
          className="tech-stack-section"
        >
          <div className="tech-stack-inner">
            <SectionHeading
              number="04"
              title="tech stack"
            />

            <p className="stack-description">
              The tools and platforms behind
              every product I ship.
            </p>

            <div className="stack-container">
              {Object.entries(stack).map(
                ([
                  category,
                  technologies,
                ]) => (
                  <div
                    key={category}
                    className="stack-category"
                  >
                    <h3>{category}</h3>

                    <div className="stack-pills">
                      {technologies.map(
                        (technology) => (
                          <TechPill
                            key={technology}
                          >
                            {technology}
                          </TechPill>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>

            <div
              id="contact"
              className="contact-card"
            >
              <div className="contact-content">
                <div className="contact-copy">
                  <h2>
                    Ready to build something
                    real?
                  </h2>

                  <p>
                    Have a product idea or a
                    process that needs
                    automating? Let's talk
                    about turning it into a
                    working system.
                  </p>

                  <div className="contact-socials">
                    <a
                      href="https://github.com/anniesrdnl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github ↗
                    </a>

                    <a
                      href="mailto:anniesardiniola@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gmail ↗
                    </a>

                    <a
                      href="https://www.facebook.com/share/1HN6oJgtaM/?mibextid=wwXIfr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook ↗
                    </a>
                  </div>
                </div>

                <div className="contact-action">
                  <a
                    href="mailto:anniesardiniola@gmail.com"
                    className="contact-button"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>

                    <span>
                      Get in touch
                    </span>
                  </a>

                  <a
                    href="mailto:anniesardiniola@gmail.com"
                    className="contact-email"
                  >
                    anniesardiniola@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="contact-lights"
                aria-hidden="true"
              >
                {Array.from({
                  length: 110,
                }).map((_, index) => (
                  <span
                    key={index}
                    className="contact-light"
                    style={{
                      '--light-delay': `${(index % 18) * 0.11}s`,
                      '--light-duration': `${1.8 + (index % 5) * 0.18}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollTop />
    </div>
  )
}

export default App

