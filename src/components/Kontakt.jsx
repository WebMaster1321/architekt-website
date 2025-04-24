"use client"
import { useState } from "react"

const Kontakt = () => {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   betreff: "",
   nachricht: "",
 })
 const handleChange = (e) => {
   const { name, value } = e.target
   setFormData((prevState) => ({
     ...prevState,
     [name]: value,
   }))
 }
 const handleSubmit = (e) => {
   e.preventDefault()
   console.log("Formular abgeschickt:", formData)
   // Hier kannst du die Logik zum Absenden des Formulars implementieren
   alert("Vielen Dank für deine Nachricht! Wir werden uns innerhalb von 48 Stunden bei ihnen melden.")
   setFormData({
     name: "",
     email: "",
     betreff: "",
     nachricht: "",
   })
 }
 return (
<div className="ueber-uns-container">
<div className="kontakt-section">
<h1>KONTAKT</h1>
<div className="kontakt-content">
<div className="kontakt-info">
<h2>
Jetzt Raum für  <span className="highlight">Ideen schaffen.</span>
</h2>
<p>
Sie möchten mit uns planen oder haben Fragen zu Ihrem Bauvorhaben?
Schreiben Sie uns gern eine E-Mail an
<a href="mailto:info@example.de">info@example.de</a>
oder nutzen Sie das Kontaktformular.
Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.


</p>
</div>
<div className="kontakt-formular">
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="name">Name *</label>
<input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Dein Name"
                 value={formData.name}
                 onChange={handleChange}
                 required
               />
</div>
<div className="form-group">
<label htmlFor="email">Email *</label>
<input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="deine@firma.de"
                 value={formData.email}
                 onChange={handleChange}
                 required
               />
</div>
<div className="form-group">
<label htmlFor="betreff">Betreff *</label>
<input
                 type="text"
                 id="betreff"
                 name="betreff"
                 placeholder="Betreff deiner Nachricht"
                 value={formData.betreff}
                 onChange={handleChange}
                 required
               />
</div>
<div className="form-group">
<label htmlFor="nachricht">Nachricht *</label>
<textarea
                 id="nachricht"
                 name="nachricht"
                 placeholder="Erzähl mir etwas über dein Projekt"
                 value={formData.nachricht}
                 onChange={handleChange}
                 required
               />
</div>
<button type="submit" className="submit-button">
               Abschicken
</button>
</form>
</div>
</div>
</div>
</div>
 )
}
export default Kontakt