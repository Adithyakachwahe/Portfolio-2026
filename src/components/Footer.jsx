import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(to bottom, #1F2937, #111827)',
        color: 'white',
        padding: '1.0rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 'auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Copyright */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#E5E7EB',
            marginBottom: '1rem',
            lineHeight: 1.5,
          }}
        >
          © {new Date().getFullYear()} Adithya Kachwahe P. <br />
          {/* <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
            Built with passion in Bangalore, India.
          </span> */}
        </p>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.05rem',
            flexWrap: 'wrap',
            marginBottom: '0.5rem',
          }}
        >
          {[
            {
              name: 'GitHub',
              url: 'https://github.com/Adithyakachwahe',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.02-.69.075-.675.075-.675.87.06 1.335.895 1.335.895.78 1.335 2.04 1.185 2.535.915.075-.72.285-1.185.525-1.445-1.8-.205-3.675-.885-3.675-4.035 0-.885.315-1.6 0.825-2.175-.075-.205-.36-1.035.075-2.145 0 0 .675-.215 2.22 0.82.645-.18 1.335-.27 2.025-.27.69 0 1.38.09 2.025.27 1.545-1.035 2.22-0.82 2.22-0.82.45 1.11.18 1.94.075 2.145.51.575.825 1.29.825 2.175 0 3.165-1.875 3.835-3.69 4.035.285.24.54.735.54 1.47 0 1.065-.015 1.92-.015 2.185 0 .21.15.46.825.385C19.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              name: 'Email',
              url: 'mailto:adithya2kachwane@gmail.com',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
            },
            {
              name: 'Portfolio',
              url: 'https://aboutadithyak.web.app',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8zm-5-9h10v2H7v-2z" />
                </svg>
              ),
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#E5E7EB',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease, transform 0.1s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#4F46E5';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#E5E7EB';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Final Message */}
        <p
          style={{
            fontSize: '0.85rem',
            color: '#9CA3AF',
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          I'm happy to hear from you. Let's build something amazing together.
        </p>
      </div>
    </footer>
  );
};

export default Footer;