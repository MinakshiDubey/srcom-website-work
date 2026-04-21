import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';

const Mission = () => {
  return (
    <section className="mission" id="about">
      <div className="container">
        <div className="mission-inner">
          <RevealAnimation direction="left">
            <div className="mission-text">
              <div className="section-label">Our Mission</div>
              <h2>Crafting Solutions That <em className="accent">Actually Work</em></h2>
              <p>Since 2011, SRComSoft has been the trusted technology partner for organisations that demand quality, reliability, and long-term results. Based in Jabalpur, India — serving the world.</p>
              <p>We believe technology is only as valuable as the human outcomes it enables. Every solution we build is designed to reduce friction, amplify capability, and create lasting competitive advantage.</p>
              <ul className="mission-list">
                <li>Customised solutions — no one-size-fits-all templates</li>
                <li>Dedicated team of 300+ certified professionals</li>
                <li>Serving BFSI, E-commerce, Healthcare and more</li>
                <li>Expertise certified by the University of California</li>
                <li>Long-term client relationships built on trust</li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right">
            <div className="mission-visual">
              <MissionCard 
                icon="shield"
                title="Proven Reliability"
                desc="13+ years of consistent delivery across complex technology engagements worldwide."
              />
              <MissionCard 
                icon="activity"
                title="Performance First"
                desc="Every project is benchmarked against measurable outcomes, not just delivery milestones."
              />
              <MissionCard 
                icon="clock"
                title="Always On Support"
                desc="Dedicated client success managers ensuring smooth operations round the clock."
              />
              <MissionCard 
                icon="box"
                title="Scalable Architecture"
                desc="Solutions that grow with your business — from startup scale to enterprise demands."
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

const MissionCard = ({ icon, title, desc }) => {
  const icons = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    box: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  };

  return (
    <div className="mission-card">
      <div className="mc-icon">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
          {icons[icon]}
        </svg>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Mission;