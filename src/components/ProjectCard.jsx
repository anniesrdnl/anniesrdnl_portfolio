import TechPill from './TechPill'

function ProjectCard({ project }) {
  return (
    <a
      href={`#project/${project.slug}`}
      aria-label={`View ${project.title} details`}
      className="project-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white"
    >
      <div className="project-card-image shrink-0 bg-[#e7e8eb]">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="project-card-body flex flex-1 flex-col">
        <div className="project-card-tech flex flex-wrap content-start gap-2">
          {project.technologies.map((technology) => (
            <TechPill key={technology}>
              {technology}
            </TechPill>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <h3 className="project-card-title font-mono text-slate-950">
            {project.title}
          </h3>

          <span
            className="project-card-arrow shrink-0 font-mono text-lg text-slate-400"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        <p className="project-card-description text-slate-700">
          {project.description}
        </p>

        {project.date && (
          <time className="project-card-date mt-auto pt-5 font-mono text-sm text-slate-400">
            {project.date}
          </time>
        )}
      </div>
    </a>
  )
}

export default ProjectCard
