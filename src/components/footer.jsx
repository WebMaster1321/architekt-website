"use client"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <footer ref={ref} className={`footer ${isVisible ? "footer-visible" : ""}`}>
      <div className="divider"></div>

      <div className="footer-main">
        {/* Navigation */}
        <div className="nav-links">
          <a onClick={() => navigate("/")}>Startseite</a>
         
          <a onClick={() => navigate("/überuns")}>Über Uns</a>
        </div>

        {/* Logo & Text */}
        <div className="center-content">
          <div className="logo">
            <span className="logo-icon">A</span>ArchitectStudio
          </div>
          <p className="tagline">
            Maßgeschneiderte Lösungen für Ihre architektonische Vision. Entdecken Sie unsere
            Kompetenz – geschätzt von führenden Gestaltern weltweit.
          </p>
          <button className="cta-button" onClick={() => scrollToSection(".section3-div")}>
            Die Besten
          </button>
        </div>

        {/* Kontaktbutton */}
        <div className="right-content">
          <button className="contact-button" onClick={() => navigate("/kontakt")}>
            Kontakt aufnehmen
          </button>
        </div>
      </div>

      {/* Unterer Bereich */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <button
            className="scroll-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="arrow-up">↑</span>
          </button>
          <p className="copyright">© Alle Rechte vorbehalten 2025 ArchitectStudio</p>
        </div>

        <div className="footer-bottom-center">
          <a href="mailto:info@architectstudio.com">info@architectstudio.com</a>
        </div>

        <div className="footer-bottom-right">
          <a href="/agb">AGB</a>
          <span className="separator">•</span>
          <a href="/datenschutz">Datenschutz</a>
          <p className="credit">Website von WebMaster</p>
        </div>
      </div>

      <div className="large-logo">ArchitectStudio</div>
    </footer>
  )
}

export default Footer
