import TechPill from './TechPill'

function ServiceDetail({ service, relatedProjects }) {
  return (
    <article className="project-detail">
      <a href="#services" className="journal-back">
        <span className="journal-back-arrow">←</span>
        <span>back to services</span>
      </a>

      <header className="project-detail-header">
        <h1 className="project-detail-title">
          {service.title}
        </h1>

        <p className="project-detail-tagline">
          {service.description}
        </p>
      </header>

      <div className="project-detail-body">
        <section className="project-detail-section">
          <h2>Overview</h2>

          {service.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="project-detail-section">
          <h2>What I offer</h2>

          <ul className="service-offerings">
            {service.offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>How I work</h2>

          <ol className="service-process">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <span className="service-process-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="project-detail-section">
          <h2>Tools</h2>

          <div className="project-detail-tech">
            {service.tools.map((tool) => (
              <TechPill key={tool}>{tool}</TechPill>
            ))}
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="project-detail-section">
            <h2>Related projects</h2>

            <div className="service-projects">
              {relatedProjects.map((project) => (
                <a
                  key={project.slug}
                  href={`#project/${project.slug}`}
                  className="service-project"
                >
                  <span className="service-project-thumb">
                    {project.image && (
                      <img
                        src={project.image}
                        alt=""
                      />
                    )}
                  </span>

                  <span className="service-project-text">
                    <span className="service-project-title">
                      {project.title}
                    </span>
                    <span className="service-project-tagline">
                      {project.tagline}
                    </span>
                  </span>

                  <span
                    className="service-project-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="service-cta">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell me about it and let's figure out the next step together.</p>
          </div>

          <a
            href="mailto:anniesardiniola@gmail.com"
            className="project-detail-button is-primary"
          >
            Get in touch
          </a>
        </section>
      </div>
    </article>
  )
}

export default ServiceDetail
