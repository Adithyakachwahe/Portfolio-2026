import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        // Soft glass-morphism background with subtle gradient
        background: 'linear-gradient(90deg, #F8FAFC, #F1F5F9, #E2E8F0)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        borderBottom: '1px solid #CBD5E1',
        backdropFilter: 'blur(8px)', // Glass-morphism effect (works on Safari/Chrome)
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          style={{
            color: '#1E293B',
            fontSize: '1.6rem',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800',
            }}
          >
            Adithya Kachwahe
          </span>
        </Link>

        {/* Navigation Links */}
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Skills', path: '/skills' },
            { name: 'Experience', path: '/experience' },
            { name: 'Education', path: '/education' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={{
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#4F46E5';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
                  e.target.style.boxShadow = '0 0 8px rgba(79, 70, 229, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#475569';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;