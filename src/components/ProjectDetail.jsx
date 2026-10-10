import TechPill from './TechPill'

function ProjectDetail({ project }) {
  return (
    <article className="project-detail">
      <a href="#projects" className="journal-back">
        <span className="journal-back-arrow">←</span>
        <span>back to projects</span>
      </a>

      <header className="project-detail-header">
        <h1 className="project-detail-title">
          {project.title}
        </h1>

        {project.tagline && (
          <p className="project-detail-tagline">
            {project.tagline}
          </p>
        )}

        <div className="project-detail-tech">
          {project.technologies.map((technology) => (
            <TechPill key={technology}>
              {technology}
            </TechPill>
          ))}
        </div>
      </header>

      <div className="project-detail-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
          />
        ) : (
          <span className="project-detail-media-empty">
            preview coming soon
          </span>
        )}
      </div>

      <div className="project-detail-footer">
        <div className="project-detail-actions">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-button is-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 21h8M12 18v3" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}

          {project.status && (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-sm text-amber-700">
              {project.status}
            </span>
          )}

          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              <span>Source Code</span>
            </a>
          )}
        </div>

        {project.date && (
          <time className="project-detail-date">
            {project.date}
          </time>
        )}
      </div>

      <div className="project-detail-body">
        <section className="project-detail-section">
          <h2>Overview</h2>

          {(project.overview ?? [project.description]).map(
            (paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ),
          )}
        </section>

        {project.motivation && (
          <section className="project-detail-section">
            <h2>Motivation</h2>

            {project.motivation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        )}
      </div>
    </article>
  )
}

export default ProjectDetail
