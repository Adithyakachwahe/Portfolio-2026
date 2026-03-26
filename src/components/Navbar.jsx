// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar height
  const navbarHeight = isMobile ? 60 : 72;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initial check
    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: `${navbarHeight}px`,
      }}
    >
      {/* Main Navbar */}
      <nav
        style={{
          background: scrolled
            ? 'rgba(248, 250, 252, 0.98)'
            : 'linear-gradient(90deg, #F8FAFC, #F1F5F9, #E2E8F0)',
          padding: isMobile ? '0.75rem 0' : '1rem 0',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          boxShadow: scrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid #CBD5E1',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'box-shadow 0.3s ease, background 0.3s ease',
          height: `${navbarHeight}px`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '0 1rem' : '0 1.5rem',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              color: '#1E293B',
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.02em',
              zIndex: 10001,
              position: 'relative',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '800',
              }}
            >
              Adithya Kachwahe
            </span>
          </Link>

          {/* Hamburger Button - Only visible on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '30px',
                height: '24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                zIndex: 10001,
                position: 'relative',
              }}
            >
              <span
                style={{
                  width: '30px',
                  height: '3px',
                  background: '#4F46E5',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center',
                  transform: isMenuOpen
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : 'rotate(0) translate(0, 0)',
                }}
              />
              <span
                style={{
                  width: '30px',
                  height: '3px',
                  background: '#4F46E5',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'translateX(-20px)' : 'translateX(0)',
                }}
              />
              <span
                style={{
                  width: '30px',
                  height: '3px',
                  background: '#4F46E5',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center',
                  transform: isMenuOpen
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'rotate(0) translate(0, 0)',
                }}
              />
            </button>
          )}

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <ul
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: location.pathname === item.path ? '#4F46E5' : '#475569',
                      textDecoration: 'none',
                      fontSize: '1.05rem',
                      fontWeight: '500',
                      fontFamily: "'Inter', sans-serif",
                      padding: '0.5rem 0.85rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      backgroundColor:
                        location.pathname === item.path
                          ? 'rgba(79, 70, 229, 0.1)'
                          : 'transparent',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#4F46E5';
                      e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      if (location.pathname !== item.path) {
                        e.currentTarget.style.color = '#475569';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9997,
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
          }}
        />
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: `${navbarHeight}px`,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            zIndex: 9998,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            overflowY: 'auto',
            boxShadow: isMenuOpen ? '-5px 0 20px rgba(0, 0, 0, 0.1)' : 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Mobile Navigation Links */}
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {navItems.map((item, index) => (
              <li
                key={item.name}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(50px)',
                  transition: `all 0.3s ease ${index * 0.05}s`,
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    color: location.pathname === item.path ? '#4F46E5' : '#374151',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: location.pathname === item.path ? '600' : '500',
                    fontFamily: "'Inter', sans-serif",
                    borderBottom: '1px solid #E5E7EB',
                    backgroundColor:
                      location.pathname === item.path
                        ? 'rgba(79, 70, 229, 0.08)'
                        : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <span
                      style={{
                        width: '4px',
                        height: '24px',
                        backgroundColor: '#4F46E5',
                        borderRadius: '2px',
                        marginRight: '12px',
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div
            style={{
              padding: '1.5rem',
              borderTop: '1px solid #E5E7EB',
              marginTop: 'auto',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: '#6B7280',
                fontSize: '0.875rem',
                margin: 0,
              }}
            >
              Let's connect and build something amazing!
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <a
                href="https://github.com/Adithyakachwahe"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4F46E5',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:adithya2kachwane@gmail.com"
                style={{
                  color: '#4F46E5',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;