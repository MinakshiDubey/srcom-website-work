import React from 'react';
import RevealAnimation from '../ui/revealanimation.jsx';
import { aboutListItems } from '../../data/content.js'; // Ensure content.js is imported

const About = () => {
  return (
    <section aria-label="About Us">
      <div className="container">
        <div id="about">
          <div className="about-visual reveal">
            <div className="about-bg">
              <div className="iso-tag">✓ ISO 27001:2013 Certified</div>
              <div className="cert-badge">
                <div className="cert-title">Founded 2012</div>
                <div className="cert-sub">Over a decade of global outsourcing excellence</div>
              </div>
              <div className="cert-badge">
                <div className="cert-title">700+ Team Members</div>
                <div className="cert-sub">Diligent professionals across all verticals</div>
              </div>
              <div className="cert-badge">
                <div className="cert-title">Global Reach</div>
                <div className="cert-sub">Long-term clients worldwide across BFSI, e-commerce, FMCG & healthcare</div>
              </div>
              <div className="about-years">12+</div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="section-label">About Us</div>
            <h2>A Trusted Partner <em>Since 2012</em></h2>
            <p style={{color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem'}}>
              SRComSoft is a global provider of BPO and KPO services. We have built lasting relationships with clients across the world through customized solutions and dedicated customer support in Banking, FinTech, Investment Platforms, Insurance (BFSI), E-commerce, FMCG, Healthcare, and Data Analytics.
            </p>
            <ul className="about-list">
              {aboutListItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;