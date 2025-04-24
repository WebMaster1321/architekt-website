"use client"
import { useEffect, useRef, useState } from "react"

function Section6() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section className="hero-section6">
      <div
        ref={ref}
        className={`hero-content6 ${isVisible ? "animate-hero" : ""}`}
      >
        <h1 className="hero-title6">
  Architektur, die Visionen <br /> in Räume verwandelt
</h1>
<p className="hero-subtext6">
  Wir gestalten moderne, funktionale und ästhetische Räume, die Menschen inspirieren und Ideen Raum geben. 
  Unsere Architektur vereint Kreativität, Präzision und Nachhaltigkeit – für Lebensräume mit Charakter.
</p>
        <button className="hero-button6">Jetzt Kontaktieren</button>
      </div>
    </section>
  )
}

export default Section6
