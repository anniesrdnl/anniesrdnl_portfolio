function ServiceCard({ service }) {
  if (!service) {
    return null
  }

  const technologies = Array.isArray(service.technologies)
    ? service.technologies
    : []

  return (
    <article className="group rounded-[24px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_35px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[650px]">
          <h3 className="font-mono text-[20px] font-normal tracking-[-0.03em] text-slate-950 sm:text-[22px]">
            {service.title}
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {service.description}
          </p>
        </div>

        <span className="mt-1 font-mono text-lg text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-950">
          ↗
        </span>
      </div>

      {technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 px-4 py-2 font-mono text-xs text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ServiceCard