import { useEffect, useState } from 'react'
import annie from './assets/annie.png'

import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import ProjectCard from './components/ProjectCard'
import ProjectDetail from './components/ProjectDetail'
import ServiceDetail from './components/ServiceDetail'
import ServiceTabs from './components/ServiceTabs'
import SectionHeading from './components/SectionHeading'
import TechPill from './components/TechPill'
import ScrollTop from './components/ScrollTop'
import Hero from './components/Hero'
import ContactCard from './components/ContactCard'

import {
  projects,
  services,
  journals,
  stack,
} from './data/portfolio'
import { scrollBehavior } from './utils/goToSection'

import './App.css'

// Detail pages live at #project/<slug> and #service/<slug>
// so links and the back button work
const pageCollections = {
  project: projects,
  service: services,
}

const getPageFromHash = () => {
  const match = window.location.hash.match(/^#(project|service)\/(.+)$/)

  if (!match) {
    return null
  }

  const [, type, slug] = match
  const item = pageCollections[type].find((entry) => entry.slug === slug)

  return item ? { type, item } : null
}

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedJournal, setSelectedJournal] = useState(null)
  const [selectedPage, setSelectedPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash()

      setSelectedPage(page)

      if (page) {
        setSelectedJournal(null)
        window.scrollTo({ top: 0, behavior: 'instant' })
        return
      }

      // Back on the home page: scroll to the section named in the hash,
      // or to the very top when there is none
      const sectionId = window.location.hash.slice(1)

      setSelectedJournal(null)

      window.setTimeout(() => {
        if (!sectionId || sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: scrollBehavior() })
          return
        }

        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
      }, 50)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const toggleProjects = () => {
    const willCollapse = showAllProjects

    setShowAllProjects((current) => !current)

    if (willCollapse) {
      window.setTimeout(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({
            behavior: scrollBehavior(),
            block: 'start',
          })
      }, 100)
    }
  }

  const openJournal = (journal) => {
    setSelectedJournal(journal)
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior(),
    })
  }

  const closeJournal = () => {
    setSelectedJournal(null)

    window.setTimeout(() => {
      document
        .getElementById('journal')
        ?.scrollIntoView({
          behavior: scrollBehavior(),
          block: 'start',
        })
    }, 50)
  }

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 2)

  if (selectedPage) {
    const { type, item } = selectedPage

    return (
      <div className="portfolio-app">
        <Sidebar />
        <MobileHeader />

        <main className="portfolio-main project-detail-main">
          {type === 'project' ? (
            <ProjectDetail
              key={item.slug}
              project={item}
            />
          ) : (
            <ServiceDetail
              key={item.slug}
              service={item}
              relatedProjects={projects.filter((project) =>
                item.projects.includes(project.slug),
              )}
            />
          )}
        </main>

        <ScrollTop />
      </div>
    )
  }

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
        <Hero />

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
              title="how can I help you?"
              align="center"
            />

            <ServiceTabs services={services} />
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

            <ContactCard />
          </div>
        </section>
      </main>

      <ScrollTop />
    </div>
  )
}

export default App

