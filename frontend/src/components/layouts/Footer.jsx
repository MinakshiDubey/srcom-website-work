import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <div className="nav-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              SRComSoft
            </a>
            <p>Engineering digital excellence since 2011. A global provider of IT, BPO, and KPO solutions headquartered in Jabalpur, India.</p>
            <div className="footer-social">
              <SocialButton icon="linkedin" />
              <SocialButton icon="facebook" />
              <SocialButton icon="twitter" />
            </div>
          </div>

          {/* Services Column */}
          <FooterColumn 
            title="Services"
            links={[
              { href: '#services', label: 'Web Development' },
              { href: '#services', label: 'Mobile Apps' },
              { href: '#services', label: 'BPO Services' },
              { href: '#services', label: 'KPO Services' },
              { href: '#services', label: 'Data Analytics' },
              { href: '#services', label: 'SEO & SEM' }
            ]}
          />

          {/* Company Column */}
          <FooterColumn 
            title="Company"
            links={[
              { href: '#about', label: 'About Us' },
              { href: '#team', label: 'Our Team' },
              { href: '#industries', label: 'Industries' },
              { href: '#process', label: 'Our Process' },
              { href: '#testimonials', label: 'Clients' },
              { href: '#contact', label: 'Contact' }
            ]}
          />

          {/* Contact Column - This was the one scattered in your screenshot */}
          <div className="footer-col">
            <h5>Contact</h5>
            <div className="footer-contact">
              <ContactRow 
                icon="location"
                text="IT Park, Ground Floor, Bargi Hills, Jabalpur, Madhya Pradesh 482001, India"
              />
              <ContactRow icon="phone" text="+91 97533 59999" />
              <ContactRow icon="email" text="enquiry@srcomsoft.com" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 SRComSoft Pvt. Ltd. All rights reserved. Shri Ram ComSoft Private Limited.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- Sub-Components --- */

const SocialButton = ({ icon }) => {
  const icons = {
    linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  };

  return (
    <div className="social-btn" title={icon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeJoin="round">
        {icons[icon]}
      </svg>
    </div>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="footer-col">
    <h5>{title}</h5>
    <ul>
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactRow = ({ icon, text }) => {
  const icons = {
    location: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    email: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  };

  return (
    <div className="contact-row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeJoin="round">
        {icons[icon]}
      </svg>
      <span>{text}</span>
    </div>
  );
};

export default Footer;