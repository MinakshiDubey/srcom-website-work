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
      <Services />
      <WhyUs />
      <About />
      <TrustedClients />
      <Testimonials />
      <Team /> {/* --- RENDER THE TEAM SECTION HERE --- */}
      <Contact />
    </main>
  );
};

export default HomePage;