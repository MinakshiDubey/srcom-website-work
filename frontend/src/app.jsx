import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ALL LOCAL IMPORTS MUST HAVE .jsx OR .js EXTENSION
import Navbar from './components/layouts/navbar.jsx';
import Footer from './components/layouts/footer.jsx'; // <--- THIS WAS THE PROBLEM
import MobileMenu from './components/layouts/mobilemenu.jsx';
import ScrollToTop from './hooks/scrollToTop.js'; // Hooks are typically .js

// Import Pages (also ensure .jsx)
import Home from './pages/home.jsx';
import Career from './pages/career.jsx';
import ServicesPage from './pages/services.jsx';

import { useMobileMenu } from './hooks/useMobileMenu.js'; // Hooks are typically .js

function App() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar onMenuToggle={toggle} />
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