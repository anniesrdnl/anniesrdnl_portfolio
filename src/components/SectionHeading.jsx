function SectionHeading({
  number,
  title,
  action,
  onAction,
}) {
  const cleanAction = action
    ? action.replace(/^>\s*/, '').replace(/\s*_$/, '').trim()
    : ''

  return (
    <div className="flex items-center justify-between gap-6">
      <h2 className="font-mono text-xl text-slate-950">
        {number} - {title}
      </h2>

      {action && (
        <button
          type="button"
          onClick={onAction}
          className="section-action font-mono text-sm text-slate-500"
        >
          <span className="section-action-arrow">&gt;</span>
          <span>{cleanAction}</span>
          <span className="section-action-cursor">_</span>
        </button>
      )}
    </div>
  )
}

export default SectionHeading