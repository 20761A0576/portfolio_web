import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section" style={{ '--section-index': 1 }}>
            <h3 className="footer-title">About Me</h3>
            <p className="footer-description">
              I'm a passionate full-stack developer with expertise in creating modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i><FaGithub /></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i><FaLinkedin /></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <i><FaTwitter /></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section" style={{ '--section-index': 2 }}>
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section" style={{ '--section-index': 3 }}>
            <h3 className="footer-title">Services</h3>
            <div className="footer-links">
              <a href="#web-development" className="footer-link">Web Development</a>
              <a href="#mobile-development" className="footer-link">Mobile Development</a>
              <a href="#ui-design" className="footer-link">UI/UX Design</a>
              <a href="#consulting" className="footer-link">Consulting</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section" style={{ '--section-index': 4 }}>
            <h3 className="footer-title">Contact</h3>
            <div className="footer-links">
              <a href="mailto:your.email@example.com" className="footer-link">
                <FaEnvelope /> your.email@example.com
              </a>
              <a href="tel:+1234567890" className="footer-link">
                <FaPhone /> +1 (234) 567-890
              </a>
              <a href="#" className="footer-link">
                <FaMapMarkerAlt /> Your Location
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
            <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;