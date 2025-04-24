import { useState, useEffect, useRef } from 'react';
import Section4 from '../components/section4';
import Section5 from './section5';
import Section6 from './Section6';
import { FiArrowRight } from 'react-icons/fi';

export default function Section3() {
  const [visible, setVisible] = useState(false);
  const [produktVisible, setProduktVisible] = useState(false);
  const [counts, setCounts] = useState({ accounts: 0, traders: 0, capital: 0 });

  const sectionRef = useRef(null);
  const produktRef = useRef(null);
  const section4Ref = useRef(null); // ← für Auto-Scroll zu Section4

  const finalValues = {
    projects: 250,
    clients: 180,
    years: 12,
  };

  const animationDuration = 2000;
  const framesPerSecond = 60;
  const totalFrames = (animationDuration / 1000) * framesPerSecond;

  // Zahlen-Animation
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => ref && observer.unobserve(ref);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProduktVisible(true);
    }, { threshold: 0.1 });

    const ref = produktRef.current;
    if (ref) observer.observe(ref);
    return () => ref && observer.unobserve(ref);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      if (frame <= totalFrames) {
        setCounts({
          projects: Math.ceil(finalValues.projects * progress),
          clients: Math.ceil(finalValues.clients * progress),
          years: Math.ceil(finalValues.years * progress),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(interval);
  }, [visible]);

  const handleScrollJourney = () => {
    const gallery = document.querySelector('.image-gallery');
    const lastImg = gallery?.lastElementChild;

    if (!gallery || !lastImg) return;

    const isHorizontal = getComputedStyle(gallery).flexDirection === 'row';
    const isMobile = window.innerWidth <= 640;

    if (!isHorizontal && !isMobile) return;

    const scrollToLastImage = () => {
      const start = gallery.scrollLeft;
      const end = lastImg.offsetLeft;
      const duration = 1500;
      const startTime = performance.now();

      const scroll = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        gallery.scrollLeft = start + (end - start) * ease;

        if (progress < 1) {
          requestAnimationFrame(scroll);
        } else {
          // nach kurzer Pause automatisch zu Section4 scrollen
          setTimeout(() => {
            section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
          }, 400);
        }
      };

      requestAnimationFrame(scroll);
    };

    // bei vertikalem Layout einfach ganz nach unten scrollen
    if (!isHorizontal) {
      lastImg.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    } else {
      scrollToLastImage();
    }
  };

  return (
    <>
      <div ref={sectionRef} className="experience-container">
        <h2 className="experience-heading">Unsere Architekturkompetenz</h2>
        <div className="experience-grid">
          <div className={`experience-box ${visible ? 'visible' : ''}`}>
            <div className="experience-content">
              <p className="experience-number">{counts.projects}+</p>
              <p className="experience-label">abgeschlossene Projekte</p>
            </div>
          </div>
          <div className={`experience-box delay-1 ${visible ? 'visible' : ''}`}>
            <div className="experience-content">
              <p className="experience-number">{counts.clients}+</p>
              <p className="experience-label">zufriedene Kunden</p>
            </div>
          </div>
          <div className={`experience-box delay-2 ${visible ? 'visible' : ''}`}>
            <div className="experience-content">
              <p className="experience-number">{counts.years}+</p>
              <p className="experience-label">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={produktRef} className={`produkt-container ${produktVisible ? 'produkt-visible' : ''}`}>
      <div className="scroll-text" onClick={handleScrollJourney}>
  <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    SCROLL <FiArrowRight size={20} />
  </p>
</div>

        <div className="flex-container">
          <p className="product-text">Projekte</p>
          <div className="image-gallery">
            <img src="/Bild2.png" alt="Bild 1" />
            <img src="/Bild4.png" alt="Bild 2" />
            <img src="/Bild3.png" alt="Bild 3" />
          </div>
        </div>
      </div>

      <div className="section4-div" ref={section4Ref}>
        <Section4 />
      </div>

      <div className="section5-div">
        <Section5 />
      </div>
      <div className="section6-div">
        <Section6 />
      </div>
    </>
  );
}
