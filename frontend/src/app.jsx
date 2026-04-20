import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import MobileMenu from './components/layouts/mobilemenu';
import ScrollToTop from './hooks/scrollToTop'; // Create this to reset scroll on page change
import { useMobileMenu } from './hooks/useMobileMenu';
import ServicesPage from './pages/services.jsx';
// Import Pages
import Home from './pages/home';
import Career from './pages/career';
// You can create these next:
// import Services from './pages/services';
// import Industries from './pages/industries';

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