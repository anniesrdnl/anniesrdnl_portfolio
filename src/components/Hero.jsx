import { useEffect, useState } from 'react'
import annie from '../assets/annie.png'
import HeroTechIcons from './HeroTechIcons'
import TapHint from './TapHint'
import TechPill from './TechPill'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './Hero.css'

const FIRST_TEXT = "Hello! I'm"
const NAME_TEXT = 'Annie'
const SECOND_TEXT =
  'I design and build as an aspiring full-stack developer in my junior year.'

const SKILLS = ['UI/UX', 'Web Development', 'Product Design']

// Hand-placed confetti: start x (% of name), burst offset, spin, shape, delay
const CONFETTI = [
  { x: 8, dx: -26, dy: -34, r: 160, shape: 'bar', delay: 0 },
  { x: 18, dx: -12, dy: -48, r: -120, shape: 'dot', delay: 60 },
  { x: 30, dx: -6, dy: -40, r: 200, shape: 'bar', delay: 120 },
  { x: 42, dx: 4, dy: -54, r: -180, shape: 'dot', delay: 30 },
  { x: 52, dx: -4, dy: -44, r: 140, shape: 'bar', delay: 90 },
  { x: 62, dx: 8, dy: -50, r: -160, shape: 'dot', delay: 150 },
  { x: 74, dx: 12, dy: -38, r: 220, shape: 'bar', delay: 45 },
  { x: 84, dx: 18, dy: -46, r: -140, shape: 'dot', delay: 105 },
  { x: 94, dx: 28, dy: -32, r: 180, shape: 'bar', delay: 75 },
]

function TypingCursor() {
  return <span className="typing-cursor">|</span>
}

function Hero() {
  const reduceMotion = usePrefersReducedMotion()

  const [typedFirst, setTypedFirst] = useState('')
  const [typedName, setTypedName] = useState('')
  const [typedSecond, setTypedSecond] = useState('')
  const [typingStage, setTypingStage] = useState('first')

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    let timeout

    if (typingStage === 'first') {
      if (typedFirst.length < FIRST_TEXT.length) {
        timeout = window.setTimeout(() => {
          setTypedFirst(FIRST_TEXT.slice(0, typedFirst.length + 1))
        }, 115)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('name')
        }, 250)
      }
    }

    if (typingStage === 'name') {
      if (typedName.length < NAME_TEXT.length) {
        timeout = window.setTimeout(() => {
          setTypedName(NAME_TEXT.slice(0, typedName.length + 1))
        }, 130)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('second')
        }, 400)
      }
    }

    if (typingStage === 'second') {
      if (typedSecond.length < SECOND_TEXT.length) {
        timeout = window.setTimeout(() => {
          setTypedSecond(SECOND_TEXT.slice(0, typedSecond.length + 1))
        }, 70)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('pause')
        }, 2200)
      }
    }

    if (typingStage === 'pause') {
      timeout = window.setTimeout(() => {
        setTypingStage('deleteSecond')
      }, 300)
    }

    if (typingStage === 'deleteSecond') {
      if (typedSecond.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedSecond(SECOND_TEXT.slice(0, typedSecond.length - 1))
        }, 30)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('deleteName')
        }, 150)
      }
    }

    if (typingStage === 'deleteName') {
      if (typedName.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedName(NAME_TEXT.slice(0, typedName.length - 1))
        }, 45)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('deleteFirst')
        }, 150)
      }
    }

    if (typingStage === 'deleteFirst') {
      if (typedFirst.length > 0) {
        timeout = window.setTimeout(() => {
          setTypedFirst(FIRST_TEXT.slice(0, typedFirst.length - 1))
        }, 45)
      } else {
        timeout = window.setTimeout(() => {
          setTypingStage('restart')
        }, 500)
      }
    }

    if (typingStage === 'restart') {
      timeout = window.setTimeout(() => {
        setTypingStage('first')
      }, 500)
    }

    return () => {
      window.clearTimeout(timeout)
    }
  }, [reduceMotion, typedFirst, typedName, typedSecond, typingStage])

  const shownFirst = reduceMotion ? FIRST_TEXT : typedFirst
  const shownName = reduceMotion ? NAME_TEXT : typedName
  const shownSecond = reduceMotion ? SECOND_TEXT : typedSecond

  const cursorIsFirst =
    !reduceMotion &&
    (typingStage === 'first' ||
      typingStage === 'deleteFirst' ||
      typingStage === 'restart')

  const cursorIsName =
    !reduceMotion &&
    (typingStage === 'name' || typingStage === 'deleteName')

  const cursorIsSecond =
    !reduceMotion &&
    (typingStage === 'second' ||
      typingStage === 'pause' ||
      typingStage === 'deleteSecond')

  const nameIsComplete = shownName.length === NAME_TEXT.length

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section id="home" className="home-section dot-grid">
      <HeroTechIcons />

      <div className="home-inner">
        <h1 className="hero-intro">
          <span className="sr-only">
            {FIRST_TEXT} {NAME_TEXT}
          </span>

          <span className="hero-hello" aria-hidden="true">
            {shownFirst}
            {cursorIsFirst && <TypingCursor />}
          </span>

          <img src={annie} alt="" className="hero-profile" />

          <span
            className={`hero-name ${nameIsComplete ? 'is-complete' : ''}`}
            aria-hidden="true"
          >
            <span className="hero-name-text">{shownName}</span>

            {nameIsComplete && (
              <span className="hero-confetti">
                {CONFETTI.map((piece, index) => (
                  <span
                    key={index}
                    className={`hero-confetti-piece is-${piece.shape}`}
                    style={{
                      '--x': `${piece.x}%`,
                      '--dx': `${piece.dx}px`,
                      '--dy': `${piece.dy}px`,
                      '--r': `${piece.r}deg`,
                      '--delay': `${piece.delay}ms`,
                    }}
                  />
                ))}
              </span>
            )}

            {cursorIsName && <TypingCursor />}
          </span>
        </h1>

        <p className="hero-description">
          <span className="sr-only">{SECOND_TEXT}</span>

          <span className="hero-description-ghost" aria-hidden="true">
            {SECOND_TEXT}
            <TypingCursor />
          </span>

          <span className="hero-description-typed" aria-hidden="true">
            {shownSecond}
            {cursorIsSecond && <TypingCursor />}
          </span>
        </p>

        <ul className="hero-skills" aria-label="Focus areas">
          {SKILLS.map((skill, index) => (
            <li
              key={skill}
              className={`hero-floating-skill hero-floating-skill-${index + 1}`}
            >
              <TechPill>{skill}</TechPill>
            </li>
          ))}
        </ul>

        <button type="button" onClick={scrollToProjects} className="hero-button">
          <span className="hero-button-arrow" aria-hidden="true">
            &gt;
          </span>

          <span className="hero-button-text">View my projects</span>

          <span className="hero-button-cursor" aria-hidden="true">
            _
          </span>

          <TapHint className="hero-button-hint" />
        </button>
      </div>
    </section>
  )
}

export default Hero
