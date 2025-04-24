"use client"
import { useEffect, useRef, useState } from "react"

const ÜberUns = () => {
 const [isVisible, setIsVisible] = useState({
   intro: false,
   philosophy: false,
   team: false,
 })
 const introRef = useRef(null)
 const philosophyRef = useRef(null)
 const teamRef = useRef(null)
 useEffect(() => {
   const observerOptions = {
     threshold: 0.2,
   }
   const observerCallback = (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         if (entry.target === introRef.current) {
           setIsVisible((prev) => ({ ...prev, intro: true }))
         } else if (entry.target === philosophyRef.current) {
           setIsVisible((prev) => ({ ...prev, philosophy: true }))
         } else if (entry.target === teamRef.current) {
           setIsVisible((prev) => ({ ...prev, team: true }))
         }
       }
     })
   }
   const observer = new IntersectionObserver(observerCallback, observerOptions)
   if (introRef.current) observer.observe(introRef.current)
   if (philosophyRef.current) observer.observe(philosophyRef.current)
   if (teamRef.current) observer.observe(teamRef.current)
   return () => {
     if (introRef.current) observer.unobserve(introRef.current)
     if (philosophyRef.current) observer.unobserve(philosophyRef.current)
     if (teamRef.current) observer.unobserve(teamRef.current)
   }
 }, [])
 return (
<div className="ueber-uns-container">
     {/* Hero Section */}
<div className="hero-section7">
  <div className="hero-overlay" />
  <div className="hero-content7">
    <h1 className="hero-title7">
      <span className="line-animation7">ARCHITEKTUR</span>
      <span className="line-animation delay-1">DIE BEWEGT</span>
    </h1>
    <div className="hero-line7"></div>
    <p className="hero-subtitle7">Wir gestalten Räume, die Menschen inspirieren</p>
  </div>
</div>
     {/* Intro Section */}
<section ref={introRef} className={`intro-section7 ${isVisible.intro ? "visible" : ""}`}>
<div className="section-content7">
<h2>Über Uns</h2>
<div className="intro-grid7">
<div className="intro-text7">
<p>
               Seit 2005 schaffen wir bei <strong>ARCHITEKTUR STUDIO</strong> innovative Räume, die Funktionalität mit
               ästhetischer Vision verbinden. Unser Team aus erfahrenen Architekten und Designern arbeitet mit
               Leidenschaft daran, die Träume unserer Kunden in beeindruckende architektonische Realität umzusetzen.
</p>
<p>
               Wir glauben, dass gute Architektur mehr ist als nur Gebäude – sie ist die Kunst, Räume zu schaffen, die
               Menschen bewegen, inspirieren und ihr Leben bereichern.
</p>
</div>
<div className="intro-image7">
<div className="image-container7">
<img src="/laptop.png" alt="Modernes Architekturprojekt" />
</div>
</div>
</div>
</div>
</section>
     {/* Philosophy Section */}
<section ref={philosophyRef} className={`philosophy-section7 ${isVisible.philosophy ? "visible" : ""}`}>
<div className="section-content7">
<h2>Unsere Philosophie</h2>
<div className="philosophy-cards7">
<div className="philosophy-card7">
<div className="card-icon7">
<div className="icon-circle7">01</div>
</div>
<h3>Nachhaltigkeit</h3>
<p>
               Wir integrieren umweltfreundliche Lösungen und nachhaltige Materialien in jedes unserer Projekte, um die
               Umweltbelastung zu minimieren.
</p>
</div>
<div className="philosophy-card7">
<div className="card-icon7">
<div className="icon-circle7">02</div>
</div>
<h3>Innovation</h3>
<p>
               Durch den Einsatz neuester Technologien und kreativer Ansätze schaffen wir zukunftsweisende Architektur,
               die neue Maßstäbe setzt.
</p>
</div>
<div className="philosophy-card7">
<div className="card-icon7">
<div className="icon-circle7">03</div>
</div>
<h3>Menschlichkeit</h3>
<p>
               Im Zentrum unserer Arbeit steht immer der Mensch – wir gestalten Räume, die das Wohlbefinden und die
               Lebensqualität verbessern.
</p>
</div>
</div>
</div>
</section>
     {/* Call to Action */}
<section className="cta-section7">
<div className="cta-content7">
<h2>Lassen Sie uns gemeinsam Ihre Vision verwirklichen</h2>
<button className="cta-button7" onClick={() => navigate("/kontakt")}>Kontakt aufnehmen</button>
</div>
</section>
</div>
 )
}
export default ÜberUns
