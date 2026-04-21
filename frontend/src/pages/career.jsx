import React from 'react';
import SectionHeader from '../components/ui/sectionheader.jsx';
import RevealAnimation from '../components/ui/revealanimation.jsx';
import Button from '../components/ui/button.jsx';

const Career = () => {
  const benefits = [
    { title: "Growth Mindset", desc: "Regular training sessions and certification support to keep you ahead." },
    { title: "Global Exposure", desc: "Work with international clients across BFSI, FinTech, and Healthcare." },
    { title: "Work-Life Balance", desc: "Flexible shifts and a supportive environment in the heart of Jabalpur." },
    { title: "Health & Wellness", desc: "Comprehensive health benefits for you and your dependents." }
  ];

  return (
    <main style={{paddingTop: '80px'}}>
      {/* Career Hero */}
      <section className="section" style={{background: 'var(--bg)'}}>
        <div className="container">
          <div style={{maxWidth: '800px'}}>
            <RevealAnimation>
              <div className="section-label">Join the Team</div>
              <h1 style={{marginBottom: '24px'}}>Build Your Future at <em className="accent">SRComSoft</em></h1>
              <p className="hero-sub">
                Be part of a 300+ strong team of engineers, analysts, and innovators. We don't just offer jobs; we offer careers that matter.
              </p>
              <Button href="https://forms.gle/QumEBDV8sudVUfM5A" variant="primary">View Open Positions</Button>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Culture/Benefits Section */}
      <section className="section" style={{background: 'var(--bg2)'}}>
        <div className="container">
          <SectionHeader 
            label="Why SRComSoft"
            title="Life at the <em class='accent'>Digital Edge</em>"
            description="We foster a culture of innovation, transparency, and continuous learning."
          />
          
          <div className="services-grid">
            {benefits.map((item, idx) => (
              <div key={idx} className="service-card" style={{padding: '40px'}}>
                <div className="service-num">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="hero-stats" style={{position: 'static', justifyContent: 'space-around', width: '100%'}}>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div className="stat-number">300<span>+</span></div>
              <div className="stat-label">Experts</div>
            </div>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div className="stat-number">13<span>+</span></div>
              <div className="stat-label">Years of Stability</div>
            </div>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div className="stat-number">4.5<span>★</span></div>
              <div className="stat-label">Employee Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'var(--accent)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <RevealAnimation>
            <h2 style={{color: 'var(--bg)', marginBottom: '16px'}}>Don't see a matching role?</h2>
            <p style={{color: 'var(--bg)', opacity: 0.8, marginBottom: '32px'}}>
              We are always looking for passionate people. Send us your resume anyway!
            </p>
            <Button 
              href="https://forms.gle/QumEBDV8sudVUfM5A" 
              variant="outline" 
              style={{borderColor: 'var(--bg)', color: 'var(--bg)'}}
            >
              Submit General Application
            </Button>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default Career;