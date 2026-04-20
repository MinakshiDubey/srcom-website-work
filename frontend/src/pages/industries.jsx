import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import RevealAnimation from '../components/ui/RevealAnimation';
import { industries } from '../data/content';

const Industries = () => {
  return (
    <section className="section industries-bg" id="industries">
      <div className="container">
        <SectionHeader 
          label="Industries"
          title="Sectors We <em class='accent'>Serve</em>"
          description="Deep domain expertise across the verticals that matter most — enabling solutions that are context-aware, not generic."
        />

        <div className="industries-grid">
          {industries.map((industry, idx) => (
            <IndustryPill key={idx} {...industry} delay={idx % 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryPill = ({ name, desc, icon, delay }) => {
  const icons = {
    lock: <><rect x="3" y="10" width="18" height="11" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></>,
    card: <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,
    shopping: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    health: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    file: <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>
  };

  return (
    <RevealAnimation delay={delay}>
      <div className="industry-pill">
        <div className="ind-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
            {icons[icon]}
          </svg>
        </div>
        <div className="ind-text">
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default Industries;