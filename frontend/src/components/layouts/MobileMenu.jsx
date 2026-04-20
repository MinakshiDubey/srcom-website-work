import React from 'react';
import { navLinks } from '../../data/content';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      {navLinks.slice(0, 7).map((link, idx) => (
        <a 
          key={idx}
          href={link.href} 
          onClick={onClose}
          target={link.external ? '_blank' : '_self'}
          rel={link.external ? 'noopener noreferrer' : ''}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;