import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { navLinks } from '../../data/content';
import ThemeToggle from '../themetoggle'; // Matches your lowercase filename
import Button from '../ui/button'; // Matches your lowercase filename

const Navbar = ({ onMenuToggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none' }}>
      <div className="container nav-inner">
        {/* Changed <a> to <Link> for the logo */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          SRComSoft
        </Link>

        <ul className="nav-links">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              {/* 
                Logic: If the link is external (PDFs) use <a>.
                If it's internal (Home, Career) use <Link>.
              */}
              {link.external ? (
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link to={link.href}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          {/* Changed href to /contact to point to your new contact page route */}
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          <button 
            className="hamburger" 
            onClick={onMenuToggle}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;