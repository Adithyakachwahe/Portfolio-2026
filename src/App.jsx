// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import styles from './styles/App.module.css';

// ScrollToTop Component - Must be inside Router
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the scrollable container
    const scrollContainer = document.getElementById('scroll-container');
    
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
      scrollContainer.scrollTop = 0;
    }
    
    // Fallbacks
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }, [pathname]);

  return null;
};

// App Content Component - Contains all the routed content
const AppContent = () => {
  return (
    <>
      {/* ScrollToTop - Triggers on every route change */}
      <ScrollToTop />
      
      <div className={styles.appContainer}>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Content Wrapper - Add ID for scroll targeting */}
        <div id="scroll-container" className={styles.contentWrapper}>
          {/* Spacer for fixed navbar */}
          <div className={styles.navbarSpacer} />

          {/* Scrollable Main Content */}
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;