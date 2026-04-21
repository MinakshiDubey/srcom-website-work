import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';
import { teamMembers } from '../../data/content.js';

const Team = () => {
  return (
    <section id="team" aria-label="Our Team">
      <div className="container">
        <RevealAnimation>
          <div className="section-label">Leadership</div>
          <h2>The <em>Team</em> Behind SRComSoft</h2>
          <p className="section-intro">Experienced engineers and entrepreneurs with IIT, BITS Pilani, and RGPV pedigrees driving our operations.</p>
        </RevealAnimation>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <RevealAnimation key={idx}>
              {/* --- UPDATED TEAM CARD STRUCTURE --- */}
              <div className="team-member-card"> {/* Changed class name */}
                <img src={member.photo} alt={`Photo of ${member.name}`} className="team-member-photo" />
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <span className="title">{member.role}</span> {/* Changed from div to span with class 'title' */}
                  <p>{member.bio}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;