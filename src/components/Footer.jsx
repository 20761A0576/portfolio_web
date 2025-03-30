import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaCode,
  FaAddressCard,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaHandshake
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <h3>About Me</h3>
            <p>
              I am a passionate Full Stack Developer with expertise in creating modern web applications.
              I specialize in building responsive, user-friendly websites using cutting-edge technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com/20761A0576" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/dandaramireddy" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/DandaRam4570" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <FaUser /> About
                </a>
              </li>
              <li>
                <a href="#projects">
                  <FaCode /> Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FaAddressCard /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#web-development">
                  <FaLaptopCode /> Web Development
                </a>
              </li>
              <li>
                <a href="#mobile-apps">
                  <FaMobileAlt /> Mobile Apps
                </a>
              </li>
              <li>
                <a href="#ui-design">
                  <FaPalette /> UI/UX Design
                </a>
              </li>
              <li>
                <a href="#consulting">
                  <FaHandshake /> Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaEnvelope />
                <p>sairamdanda123@gmail.com</p>
              </li>
              <li>
                <FaPhone />
                <p>+91 9392873662</p>
              </li>
              <li>
                <FaMapMarkerAlt />
                <p>Markapur, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
