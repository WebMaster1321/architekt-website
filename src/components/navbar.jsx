"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="burger-navbar">
    {/* Permanent sichtbares Burger-Menü in der linken Ecke */}
    <button 
      className={`burger ${isMenuOpen ? 'active' : ''}`} 
      onClick={toggleMenu}
      aria-label="Menü öffnen"
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>

    {/* Logo in der Mitte (optional) */}
    <div className="logo">
      <Link to="/">ArchitectStudio</Link>
    </div>

    {/* Navigation Dropdown */}
    {isMenuOpen && (
      <div className="menu-dropdown">
        <Link to="/" className="menu-item" onClick={toggleMenu}>Start</Link>
        <Link to="/überuns" className="menu-item" onClick={toggleMenu}>Über Uns</Link>
        <Link to="/kontakt" className="menu-item" onClick={toggleMenu}>Kontakt</Link>
      </div>
    )}
  </nav>
  )
}

export default Navbar
