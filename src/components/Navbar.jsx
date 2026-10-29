import { useState } from "react";
import "../assets/style/style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="delivery-navbar" data-aos="fade-down" data-aos-duration="600">
      <a href="/" className="delivery-logo" data-aos="fade-right" data-aos-delay="100">
        <span className="logo-icon">📖</span>
        <span>Commerce<span className="logo-highlight">instution</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`} data-aos="fade-down" data-aos-delay="200">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#offers" onClick={() => setMenuOpen(false)}>Offers</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions" data-aos="fade-left" data-aos-delay="300">
        <button className="search-btn" aria-label="Search">search</button>


        <button className="signin-btn">Enrollnow</button>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
