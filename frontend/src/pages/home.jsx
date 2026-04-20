import React from 'react';
// Add .jsx to all of these and ensure filenames are lowercase
import Hero from "../components/sections/hero.jsx";
import Ticker from "../components/sections/ticker.jsx";
import Services from "../components/sections/services.jsx";
import Mission from "../components/sections/mission.jsx";
import TrustedClients from "../components/sections/trustedclients.jsx";
import Contact from "../components/sections/contact.jsx";
import Button from "../components/ui/button.jsx";
import RevealAnimation from "../components/ui/revealanimation.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Mission />
      <TrustedClients />
      <Contact />
    </main>
  );
};

export default Home;