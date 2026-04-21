import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';
import { testimonials } from '../../data/content';

const Testimonials = () => {
  return (
    <section className="section" id="testimonials" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <SectionHeader 
          label="Client Voices"
          title="Trusted by <em class='accent'>Clients Worldwide</em>"
        />

        <div className="testi-grid">
          {testimonials.map((testi, idx) => (
            <TestimonialCard key={idx} {...testi} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rating, text, author, role, avatar, delay }) => (
  <RevealAnimation delay={delay}>
    <div className="testi-card">
      <div className="testi-stars">
        {'★'.repeat(rating)}
      </div>
      <div className="testi-text">{text}</div>
      <div className="testi-author">
        <div className="testi-avatar">{avatar}</div>
        <div className="testi-info">
          <strong>{author}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  </RevealAnimation>
);

export default Testimonials;