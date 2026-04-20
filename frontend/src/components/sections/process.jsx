import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import RevealAnimation from '../ui/RevealAnimation';
import { processSteps } from '../../data/content';

const Process = () => {
  return (
    <section className="section process-bg" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 72px' }}>
          <SectionHeader 
            label="How We Work"
            title="Our Engagement <em class='accent'>Process</em>"
            description="A transparent, structured approach that keeps you informed and in control at every stage."
            centered
          />
        </div>

        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <ProcessStep key={idx} {...step} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ num, title, desc, delay }) => (
  <RevealAnimation delay={delay}>
    <div className="process-step">
      <div className="step-dot">{num}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </RevealAnimation>
);

export default Process;