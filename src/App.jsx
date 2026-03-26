// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className={styles.appContainer} style={{height:'97.5vh'}}>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Content Wrapper (includes spacer + main + footer) */}
        <div className={styles.contentWrapper}>
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
    </Router>
  );
}

export default App;