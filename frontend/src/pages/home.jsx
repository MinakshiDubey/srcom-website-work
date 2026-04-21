import React from 'react';
import Hero from '../components/sections/hero.jsx';
import Services from '../components/sections/services.jsx';
import About from '../components/sections/about.jsx';
import WhyUs from '../components/sections/whyus.jsx';
import TrustedClients from '../components/sections/trustedclients.jsx';
import Testimonials from '../components/sections/testimonials.jsx';
import Team from '../components/sections/team.jsx';           // Ensure Team is imported
import Contact from '../components/sections/contact.jsx';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <WhyUs />
      <div className="divider"></div>
      <TrustedClients />
      <div className="divider"></div>
      <Testimonials />
      <div className="divider"></div>
      <Team /> {/* --- RENDER THE TEAM SECTION HERE --- */}
      <div className="divider"></div>
      <Contact />
    </main>
  );
};

export default HomePage;