import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';
import { clients } from '../../data/content.js'; // Must be { clients }

const TrustedClients = () => {
  return (
    <section className="section trusted-bg" id="trusted">
      <div className="container">
        <SectionHeader 
          label="Our Clients"
          title="Trusted By The <em class='accent'>Best</em>"
          description="We are proud to have collaborated with some of the most ambitious brands."
          centered
        />
        <div className="clients-grid">
          {clients.map((client, idx) => (
            <RevealAnimation key={idx} delay={idx % 5}>
              <div className="client-card">
                <img src={client.logo} alt={client.name} className="client-logo" />
                <div className="client-name">{client.name}</div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;