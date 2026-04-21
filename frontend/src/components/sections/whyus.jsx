import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';

const WhyUs = () => {
  const features = [
    {
      num: '01',
      title: 'Cost-Effective Excellence',
      desc: 'Internationally competitive quality at Indian efficiency — giving your organisation a genuine cost advantage without compromising on output.'
    },
    {
      num: '02',
      title: 'Domain-Deep Teams',
      desc: 'Our specialists are embedded within your industry verticals — BFSI, healthcare, e-commerce — so solutions are contextually accurate from day one.'
    },
    {
      num: '03',
      title: 'Results, Not Just Delivery',
      desc: 'Success means measurable outcomes — traffic growth, conversion uplift, operational savings — not just signed-off deliverables.'
    },
    {
      num: '04',
      title: 'Scalable Engagement Models',
      desc: 'Whether you need a dedicated team, project-based delivery, or ongoing managed services — we flex to your business model.'
    }
  ];

  return (
    <section className="section why-bg" id="why">
      <div className="container">
        <div className="why-inner">
          <div>
            <SectionHeader 
              label="Why SRComSoft"
              title="We've Built <em class='accent'>Before</em> We Consulted"
              description="Our insights come from years of real-world delivery, not just theory. We understand your constraints and know exactly how to navigate them."
            />

            <div className="why-features">
              {features.map((feature, idx) => (
                <RevealAnimation key={idx} delay={idx + 1}>
                  <div className="why-feat">
                    <div className="why-feat-num">{feature.num}</div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          <div>
            <RevealAnimation delay={2}>
              <div className="big-quote">
                <div className="big-quote-text">
                  "Thanks to SRComSoft, our website reached the front page of Google. Since launch we've seen consistent Alexa ranking boosts and huge online traffic growth."
                </div>
                <div className="big-quote-author">
                  <div className="avatar">E</div>
                  <div className="author-info">
                    <strong>Educational Platform Client</strong>
                    <span>Web Design & Content Services</span>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;