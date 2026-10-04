function SectionHeading({
  number,
  title,
  action,
  onAction,
  align = 'between',
}) {
  const cleanAction = action
    ? action.replace(/^>\s*/, '').replace(/\s*_$/, '').trim()
    : ''

  return (
    <div
      className={`flex items-center gap-6 ${
        align === 'center' ? 'justify-center text-center' : 'justify-between'
      }`}
    >
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