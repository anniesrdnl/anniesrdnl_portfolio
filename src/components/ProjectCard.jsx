import TechPill from './TechPill'

function ProjectCard({ project }) {
  return (
    <a
      href={`#project/${project.slug}`}
      aria-label={`View ${project.title} details`}
      className="project-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white"
    >
      <div className="project-card-image h-[370px] shrink-0 overflow-hidden bg-[#e7e8eb]">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="project-card-tech mb-5 flex min-h-[74px] flex-wrap content-start gap-2">
          {project.technologies.map((technology) => (
            <TechPill key={technology}>
              {technology}
            </TechPill>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <h3 className="font-mono text-[25px] tracking-tight text-slate-950">
            {project.title}
          </h3>

          <span className="project-card-arrow shrink-0 font-mono text-lg text-slate-400">
            →
          </span>
        </div>

        <p className="project-card-description mt-3 min-h-[112px] text-[16px] leading-7 text-slate-700">
          {project.description}
        </p>
      </div>
    </a>
  )
}

export default ProjectCard