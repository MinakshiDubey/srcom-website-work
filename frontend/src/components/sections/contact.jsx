import React from 'react';
import RevealAnimation from '../ui/revealanimation.jsx';
import Button from '../ui/button.jsx';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrap">
          <RevealAnimation direction="left">
            <div className="contact-info">
              <div className="section-label">Get in Touch</div>
              <h2>Let's <em className="accent">Talk Business</em></h2>
              <p>Ready to explore how SRComSoft can support your operations?</p>
              <div className="contact-detail">
                <div className="icon">📍</div>
                <div>
                  <div className="label">Address</div>
                  <div className="value">IT Park, Bargi Hills, Jabalpur, MP 482001</div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right">
            <div className="contact-form-wrap">
              <form>
                <input type="text" placeholder="Your Name" style={{marginBottom: '1rem'}} />
                <input type="email" placeholder="Email Address" style={{marginBottom: '1rem'}} />
                <textarea placeholder="Message" style={{marginBottom: '1rem'}}></textarea>
                <Button variant="primary" style={{width: '100%'}}>Send Message</Button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;