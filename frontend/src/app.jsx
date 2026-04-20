import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ALL LOCAL IMPORTS MUST HAVE .jsx OR .js EXTENSION
import Navbar from './components/layouts/navbar.jsx';
import Footer from './components/layouts/footer.jsx';

// Corrected: MobileMenu component is in 'mobilemenu.jsx', not 'usemobilemenu.jsx'
import MobileMenu from './components/layouts/mobilemenu.jsx'; 

import ScrollToTop from './hooks/scrollToTop.js';

// Corrected: Import the hook using its proper name 'useMobileMenu'
// The file is 'usemobilemenu.js' but the export inside it is 'useMobileMenu'
import { useMobileMenu } from './hooks/usemobilemenu.jsx'; 

// Import Pages (also ensure .jsx)
import Home from './pages/home.jsx';
import Career from './pages/career.jsx';
import ServicesPage from './pages/services.jsx';

function App() {
  // Corrected: Call the hook using its proper name 'useMobileMenu'
  const { isOpen, toggle, close } = useMobileMenu(); 

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Pass the toggle function to Navbar */}
        <Navbar onMenuToggle={toggle} /> 
        {/* Pass the state and close function to MobileMenu */}
        <MobileMenu isOpen={isOpen} onClose={close} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Add more routes here as you build them */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;