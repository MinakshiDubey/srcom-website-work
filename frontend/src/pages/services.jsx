import React from 'react';
import SectionHeader from '../components/ui/sectionheader.jsx';
import RevealAnimation from '../components/ui/revealanimation.jsx';
import Button from '../components/ui/button.jsx';

// Reusing the ServiceCard structure but embedding it directly here
const ServiceCard = ({ num, title, description, icon, delay }) => {
  const icons = {
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>
  };

  return (
    <RevealAnimation delay={delay}>
      <div className="service-card">
        <div className="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeJoin="round">
            {icons[icon]}
          </svg>
        </div>
        <div className="service-num">{num}</div>
        <h3>{title.split('\n').map((line, i) => (
          <React.Fragment key={i}>{line}{i === 0 && <br/>}</React.Fragment>
        ))}</h3>
        <p>{description}</p>
      </div>
    </RevealAnimation>
  );
};


const servicesData = [
  {
    num: '01',
    title: 'Custom Web & Mobile\nDevelopment',
    description: 'Bespoke web platforms and native Android/iOS apps built with cutting-edge technologies like React, Node.js, PHP, Java, and Flutter for unparalleled performance.',
    icon: 'monitor'
  },
  {
    num: '02',
    title: 'Strategic BPO & KPO\nServices',
    description: 'Transformative business and knowledge process outsourcing for customer support, data entry, financial operations, and specialized back-office functions. Optimise your overhead.',
    icon: 'users'
  },
  {
    num: '03',
    title: 'Advanced Data Analytics\n& Insights',
    description: 'Unlock actionable intelligence from your data. Identify market trends, optimize marketing spend, and drive product development with our comprehensive data analysis.',
    icon: 'chart'
  },
  {
    num: '04',
    title: 'Performance SEO & Digital\nMarketing',
    description: 'Dominate your online presence. Our search-engine-first strategies ensure measurable organic traffic growth, top rankings, and a powerful digital footprint.',
    icon: 'search'
  }
];

const techIcons = {
  web: <path d="M10 20.7L14 19.3 18 17 22 15M2 5L6 7 10 9 14 11M12 2v20M2 12h20"/>, // Code/web related
  mobile: <rect x="7" y="4" width="10" height="16" rx="2" ry="2"/>, // Phone icon
  cloud: <path d="M18 10h-1.26A8 8 0 0 0 3 14v2H1M21 16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1a5 5 0 0 1 1-3.66M16 16v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2M2 14.2C3.51 15 4.5 16.5 4.5 18c0 1.5-1 3-2.5 3H21M7 4h10v6H7z"/>, // Cloud database
  marketing: <path d="M3 3h18v18H3zM12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/> // Target icon
};


const ServicesPage = () => {
  return (
    <main style={{ paddingTop: '80px' }}> {/* Adjusted padding to match other pages */}
      {/* 1. Enhanced Hero Section for Services */}
      <section className="section" style={{ background: 'var(--bg)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <RevealAnimation>
            <div className="section-label">Our Core Capabilities</div>
            <h1 style={{ marginBottom: '24px', maxWidth: '900px' }}>
              Innovating Your <em className="accent">Digital Future</em> with Precision
            </h1>
            <p className="hero-sub" style={{ maxWidth: '720px' }}>
              SRComSoft delivers robust IT and BPO solutions designed for performance and scale. Empowering businesses across BFSI, E-commerce, and Healthcare to achieve digital leadership.
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* 2. Featured Services in a Custom Grid */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <SectionHeader 
            label="What We Deliver"
            title="Your Partner for Digital <em class='accent'>Transformation</em>"
            description="Our suite of services is crafted to provide a comprehensive backbone for your business, driving efficiency and innovation."
          />
          <div className="services-grid" style={{gap: '24px'}}> {/* Added gap for custom grid layout */}
            {servicesData.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technology Stack with Icons */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            label="Our Arsenal"
            title="Cutting-Edge <em class='accent'>Technology Stack</em>"
            description="We leverage the latest and most reliable technologies to build scalable, secure, and future-proof solutions."
            centered
          />
          <div className="industries-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
            {Object.entries(techIcons).map(([key, iconSvg], idx) => (
              <RevealAnimation key={idx} delay={idx} className="industry-pill" style={{flexDirection: 'column', padding: '36px 24px', gap: '16px'}}>
                <div className="ind-icon" style={{width: '60px', height: '60px', borderRadius: '14px'}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeJoin="round" style={{width: '28px', height: '28px'}}>
                    {iconSvg}
                  </svg>
                </div>
                <h4 style={{textAlign: 'center', margin: 0}}>{key.charAt(0).toUpperCase() + key.slice(1)} Development</h4>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation className="text-center" style={{marginTop: '48px'}}>
            <Button href="/contact" variant="outline">Explore Custom Solutions</Button>
          </RevealAnimation>
        </div>
      </section>

      {/* 4. Dedicated BPO & KPO Spotlight */}
      <section className="section" style={{ background: 'var(--bg3)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
            <RevealAnimation direction="left">
              <h2 style={{ marginBottom: '24px' }}>Strategic <em className="accent">BPO & KPO</em> for Operational Excellence</h2>
              <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Beyond traditional outsourcing, we offer a partnership that integrates seamlessly with your operations. Our specialized BPO and KPO services in Jabalpur are designed to reduce costs, enhance accuracy, and drive efficiency for enterprise clients.
              </p>
              <ul className="mission-list" style={{gap: '12px'}}>
                <li>24/7 Operations with Dedicated Teams</li>
                <li>ISO-Certified Data Security & Compliance</li>
                <li>Scalable Infrastructure for Peak Demands</li>
                <li>Expertise in BFSI, Healthcare, E-commerce Back-office</li>
              </ul>
            </RevealAnimation>
            <RevealAnimation direction="right">
              <div className="big-quote">
                <div className="big-quote-text">
                  "SRComSoft transformed our back-office, significantly cutting costs and boosting processing speed. Their expertise is unmatched."
                </div>
                <div className="big-quote-author">
                  <div className="avatar">A</div>
                  <div className="author-info">
                    <strong>Leading Financial Institution</strong>
                    <span>BPO Client</span>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="section" style={{ background: 'var(--bg)', textAlign: 'center' }}>
        <div className="container">
          <RevealAnimation>
            <h2 style={{ marginBottom: '24px' }}>Ready to Innovate <em className="accent">Together?</em></h2>
            <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto 40px' }}>
              Let's craft a solution that propels your business forward. Connect with our experts today.
            </p>
            <Button href="/contact" variant="primary">Discuss Your Project</Button>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;