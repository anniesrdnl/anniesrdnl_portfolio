function TapHint({ className = '' }) {
  return (
    <span className={`tap-hint ${className}`} aria-hidden="true">
      <span className="tap-hint-inner">
        <span className="tap-hint-ripple" />

        <svg
          className="tap-hint-hand"
          viewBox="0 0 24 24"
          fill="#ffffff"
          stroke="#020617"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15V4a2 2 0 0 1 4 0v5a2 2 0 0 1 3 1 2 2 0 0 1 4 1Z" />
          <path d="M11 9v2" />
          <path d="M14 10v2" />
          <path d="M18 11v2" />
        </svg>
      </span>
    </span>
  )
}

export default TapHint
