import React, { useState, useEffect } from 'react';
import RevealAnimation from '../ui/revealanimation.jsx';
import Button from '../ui/button.jsx';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ overflow: 'hidden' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/portfolio/13456575_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-content">
          <RevealAnimation>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line"></div>
              <span className="hero-eyebrow-text">Global IT & BPO Solutions — Since 2011</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={1}>
            <h1>
              Engineering<br/>
              <em>Digital Excellence</em><br/>
              for Every Business
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={2}>
            <p className="hero-sub">
              From custom software to enterprise BPO — SRComSoft empowers organisations across BFSI, FinTech, E-commerce and Healthcare with world-class technology solutions.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={3}>
            <div className="hero-actions">
              <Button href="#contact" variant="primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Start a Project
              </Button>
              <Button href="#services" variant="outline">
                Explore Services
              </Button>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={4}>
          <div className="hero-stats">
            <StatItem number="300" suffix="+" label="Employees" />
            <StatItem number="13" suffix="+" label="Years Active" />
            <StatItem number="8" suffix="+" label="Industries Served" />
          </div>
        </RevealAnimation>
      </div>

      <HeroBadge text="Web & Mobile Development" delay={2} position="hero-badge-1" />
      <HeroBadge text="BPO / KPO Services" delay={3} position="hero-badge-2" />
      <HeroBadge text="Data Analytics & SEO" delay={4} position="hero-badge-3" />

      <div className="scroll-hint">
        <div className="scroll-arrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
        Scroll
      </div>
    </section>
  );
};

const StatItem = ({ number, suffix, label }) => (
  <div className="stat-item">
    <div className="stat-number">
      {number}<span>{suffix}</span>
    </div>
    <div className="stat-label">{label}</div>
  </div>
);

const HeroBadge = ({ text, delay, position }) => (
  <RevealAnimation delay={delay} className={`hero-badge ${position}`}>
    <div className="badge-dot"></div>
    <div className="badge-text">{text}</div>
  </RevealAnimation>
);

export default Hero;