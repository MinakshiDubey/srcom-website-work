import React, { useState } from 'react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrap">
          <RevealAnimation direction="left">
            <div className="contact-info">
              <div className="section-label">Get in Touch</div>
              <h2>Let's <em className="accent">Talk Business</em></h2>
              <p>Ready to explore how SRComSoft can support your operations? Reach out and our team will respond within one business day.</p>

              <ContactDetail 
                icon="📍"
                label="Address"
                value="IT Park, Ground Floor, Bargi Hills, Jabalpur, Madhya Pradesh 482001, India"
              />
              <ContactDetail 
                icon="📞"
                label="Phone"
                value={<a href="tel:+919753359999">+91 97533 59999</a>}
              />
              <ContactDetail 
                icon="✉️"
                label="Email"
                value={<a href="mailto:enquiry@srcomsoft.com">enquiry@srcomsoft.com</a>}
              />
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right">
            <div className="contact-form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <FormGroup 
                    label="Your Name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormGroup 
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormGroup 
                  label="Company / Organization"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <FormGroup 
                  label="Service of Interest"
                  name="service"
                  placeholder="e.g. BPO, FinTech Support, Data Analytics"
                  value={formData.service}
                  onChange={handleChange}
                />

                <FormGroup 
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder="Tell us about your requirements…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <div className="form-submit">
                  <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: '4px' }}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Button>
                </div>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon, label, value }) => (
  <div className="contact-detail">
    <div className="icon">{icon}</div>
    <div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  </div>
);

const FormGroup = ({ label, name, type = 'text', placeholder, value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </div>
);

export default Contact;