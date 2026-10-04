import './ContactCard.css'

const EMAIL = 'anniesardiniola@gmail.com'

const SOCIALS = [
  {
    label: 'Github',
    href: 'https://github.com/anniesrdnl/',
  },
  {
    label: 'Gmail',
    href: `mailto:${EMAIL}`,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1HN6oJgtaM/?mibextid=wwXIfr/',
  },
]

const isExternal = (href) => href.startsWith('http')

function ContactCard() {
  return (
    <div id="contact" className="contact-card">
      <div className="contact-content">
        <div className="contact-copy">
          <h2>Ready to build something real?</h2>

          <p>
            Have a product idea or a process that needs automating? Let's talk
            about turning it into a working system.
          </p>

          <ul className="contact-socials">
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(isExternal(href) && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {label}
                  <svg
                    className="contact-social-arrow"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-action">
          <a href={`mailto:${EMAIL}`} className="contact-button">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <span>Get in touch</span>
          </a>

          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="contact-dots" aria-hidden="true" />
    </div>
  )
}

export default ContactCard
