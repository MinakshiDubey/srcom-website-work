import React from 'react';
import SectionHeader from '../ui/sectionheader.jsx';
import RevealAnimation from '../ui/revealanimation.jsx';

const servicesData = [
  {
    num: '01',
    title: 'Web & Mobile\nDevelopment',
    description: 'Custom-built web platforms and native Android/iOS applications using PHP, JavaScript, Java, and modern frameworks.',
    icon: 'monitor'
  },
  {
    num: '02',
    title: 'BPO & KPO\nServices',
    description: 'End-to-end business process and knowledge process outsourcing — customer support, data entry, and financial operations.',
    icon: 'users'
  },
  {
    num: '03',
    title: 'Data Analytics\n& Insights',
    description: 'Transform raw data into competitive intelligence. We help you identify market gaps and track trends.',
    icon: 'chart'
  },
  {
    num: '04',
    title: 'SEO & Digital\nMarketing',
    description: 'Search-engine-first strategies that deliver measurable organic traffic growth and improved rankings.',
    icon: 'search'
  }
];

const Services = () => {
  const icons = {
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader 
          label="What We Do"
          title="Our Core <em class='accent'>Services</em>"
          description="Delivering robust, scalable technology and operations solutions that drive measurable growth."
        />
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <RevealAnimation key={idx} delay={idx}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeJoin="round">
                    {icons[service.icon]}
                  </svg>
                </div>
                <div className="service-num">{service.num}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;