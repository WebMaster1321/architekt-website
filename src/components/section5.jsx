"use client"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function Section5() {
 
 return (
<div className="section5-container">
<HeaderSection />
<ServicesSection />
</div>
 )
}
function HeaderSection() {
 const [isVisible, setIsVisible] = useState(false)
 const ref = useRef(null)
 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true)
       }
     },
     { threshold: 0.1 },
   )
   if (ref.current) {
     observer.observe(ref.current)
   }
   return () => {
     if (ref.current) {
       observer.unobserve(ref.current)
     }
   }
 }, [])



 return (
<div ref={ref} className={`header-section ${isVisible ? "animate-fade-in" : ""}`}>
<h1 className="header-title">
       Entdecken Sie Unsere <span className="header-title-bold">Architekturleistungen</span>
</h1>
<p className="header-description">
       Maßgeschneiderte architektonische Lösungen, die Ihre Vision in Realität verwandeln und Ihre spezifischen
       Anforderungen erfüllen.
</p>
</div>
 )
}
function ServicesSection() {
 
 const services = [
   {
     icon: <CompassIcon />,
     title: "Außenarchitektur",
     description:
       "Innovative Fassadengestaltung und harmonische Integration in die Umgebung für beeindruckende Gebäudeansichten.",
     features: [
       "Fassadengestaltung mit nachhaltigen Materialien",
       "Landschaftsintegration und Außenraumplanung",
       "Energieeffiziente Gebäudehüllen",
       "Individuelle Formgebung nach Kundenwunsch",
     
     ],
   },
   {
     icon: <HomeIcon />,
     title: "Innenarchitektur",
     description: "Funktionale und ästhetische Raumkonzepte, die Wohlbefinden und Effizienz in jedem Bereich fördern.",
     features: [
       "Maßgeschneiderte Raumkonzepte für optimale Nutzung",
       "Materialauswahl und Farbberatung",
       "Lichtplanung für perfekte Atmosphäre",
       "Möblierungskonzepte und Einrichtungsberatung",
       "Akustische Optimierung von Innenräumen",
     ],
   },
   {
     icon: <AwardIcon />,
     title: "Premiumplanung",
     description: "Umfassende Architekturlösungen für anspruchsvolle Projekte mit höchsten Qualitätsansprüchen.",
     features: [
       "Alle Leistungen der Außen- und Innenarchitektur",
       "Erweiterte Planungstiefe mit Detailzeichnungen",
       "Baubegleitung und Qualitätskontrolle",
       "BIM-basierte Planung für optimale Koordination",
      
     ],
   },
 ]
 return (
<div className="services-container">
<div className="services-grid">
       {services.map((service, index) => (
<ServiceCard key={index} service={service} index={index} />
       ))}
</div>
</div>
 )
}
function ServiceCard({ service, index }) {
  const navigate = useNavigate()
 const [isVisible, setIsVisible] = useState(false)
 const ref = useRef(null)
 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true)
       }
     },
     { threshold: 0.1 },
   )
   if (ref.current) {
     observer.observe(ref.current)
   }
   return () => {
     if (ref.current) {
       observer.unobserve(ref.current)
     }
   }
 }, [])
 return (
<div
     ref={ref}
     className={`service-card animate-slide-up ${isVisible ? "visible" : ""}`}
     style={{ animationDelay: `${index * 0.3}s` }}
>
<div className="service-card-content">
<div className="service-card-header">
<div className="service-icon-container">{service.icon}</div>
<h3 className="service-title">{service.title}</h3>
</div>
<p className="service-description">{service.description}</p>

</div>
<div className="service-features">
<button className="service-button" onClick={() => navigate("/kontakt")}>Jetzt starten</button>
<h4 className="features-title">Leistungen:</h4>
<ul className="features-list">
         {service.features.map((feature, idx) => (
<FeatureItem key={idx} feature={feature} index={idx} isVisible={isVisible} />
         ))}
</ul>
</div>
</div>
 )
}
function FeatureItem({ feature, index, isVisible }) {
 return (
<li
     className={`feature-item animate-slide-right ${isVisible ? "visible" : ""}`}
     style={{ animationDelay: `${0.5 + index * 0.2}s` }}
>
<div className="feature-dot">
<div className="feature-dot-inner"></div>
</div>
<span className="feature-text">{feature}</span>
</li>
 )
}
// Einfache Icon-Komponenten
function CompassIcon() {
 return (
<svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="service-icon"
>
<circle cx="12" cy="12" r="10" />
<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
</svg>
 )
}
function HomeIcon() {
 return (
<svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="service-icon"
>
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
<polyline points="9 22 9 12 15 12 15 22" />
</svg>
 )
}
function AwardIcon() {
 return (
<svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="service-icon"
>
<circle cx="12" cy="8" r="7" />
<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
</svg>
 )
}
export default Section5