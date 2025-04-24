import { useState } from 'react'
import OpeningPage from './components/opening' // <- OpeningPage-Komponente
import './CSS/opening.css'

// Deine Website-Bestandteile
import Home from './components/Home'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Kontakt from './components/Kontakt'
import ÜberUns from './components/ÜberUns'
import ScrollToTop from './components/ScrollTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// CSS-Imports
import './CSS/home.css'
import './CSS/section2.css'
import './CSS/section3.css'
import './CSS/section4.css'
import './CSS/section5.css'
import './CSS/section6.css'
import './CSS/footer.css'
import './CSS/navbar.css'
import  './CSS/kontakt.css'
import  './CSS/überuns.css'

function App() {
  const [showOpening, setShowOpening] = useState(true)

  const handleOpeningComplete = () => {
    setShowOpening(false)
  }

  return (
    <>
      {showOpening ? (
        <OpeningPage onComplete={handleOpeningComplete} />
      ) : (
        <>
         <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/überuns" element={<ÜberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App