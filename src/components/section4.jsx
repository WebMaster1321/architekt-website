import { useEffect, useRef, useState } from 'react';

export default function Section4() {
  const textRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const text = `Wir gestalten Architektur, die weit über das Sichtbare hinausgeht. 
Unsere Entwürfe verbinden Ästhetik mit Funktionalität und schaffen Räume, die Erleben, Identität und Zukunft miteinander vereinen. 
Ob urbane Wohnkonzepte, kulturelle Zentren oder innovative Arbeitswelten – jedes Projekt entsteht aus dem tiefen Verständnis für Kontext, Material und Mensch.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    const current = textRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div className="architecture-page">
      <header className="top-header">
        <span>Architect@Studio</span>
        <div>
          <span>FORM FOLGT FUNKTION⏵</span>
          <span>BRANDING &gt;</span>
        </div>
      </header>

      <div className="letter-fade-section">
  <div className="logo-symbol">기</div>
  <div className="letter-fade-text" ref={textRef}>
    {text.split(" ").map((word, i) => (
      <span
        key={i}
        className={`fade-word ${visible ? 'visible' : ''}`}
        style={{ transitionDelay: `${i * 80}ms` }}
      >
        {word + '\u00A0'}
      </span>
    ))}
  </div>
</div>

    </div>
  );
}
