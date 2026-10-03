function TechPill({ children }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-mono text-[13px] leading-none text-slate-600">
      {children}
    </span>
  )
}

export default TechPill