import { useEffect, useState } from 'react'

// Merges each row's filled cells into horizontal runs so a frame is a few rects, not 256
const toRuns = (pattern) =>
  pattern.flatMap((row, y) => {
    const runs = []
    let start = -1

    for (let x = 0; x <= row.length; x += 1) {
      const filled = row[x] === '#'

      if (filled && start < 0) {
        start = x
      } else if (!filled && start >= 0) {
        runs.push({ x: start, y, width: x - start })
        start = -1
      }
    }

    return runs
  })

function PixelIcon({ frames, rest = 0, playing = false, interval = 380 }) {
  const [frame, setFrame] = useState(rest)

  useEffect(() => {
    if (!playing || frames.length < 2) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % frames.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [playing, frames.length, interval])

  const pattern = frames[playing ? frame : rest]
  const size = pattern.length

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden="true"
    >
      {toRuns(pattern).map(({ x, y, width }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={width} height="1" />
      ))}
    </svg>
  )
}

export default PixelIcon
