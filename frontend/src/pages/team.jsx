import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import RevealAnimation from '../components/ui/RevealAnimation';
import { teamMembers } from '../data/content';

const Team = () => {
  return (
    <section className="section team-bg" id="team">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 72px' }}>
          <SectionHeader 
            label="Meet the Experts"
            title="Our <em class='accent'>Leadership</em> Team"
            description="Driven by passion and expertise, our leaders guide SRComSoft towards new heights of innovation and client success."
            centered
          />
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ name, title, photo, bio, delay }) => (
  <RevealAnimation delay={delay}>
    <div className="team-member-card">
      <img src={photo} alt={`Photo of ${name}`} className="team-member-photo" />
      <div className="team-member-info">
        <h4>{name}</h4>
        <span className="title">{title}</span>
        <p>{bio}</p>
      </div>
    </div>
  </RevealAnimation>
);

export default Team;