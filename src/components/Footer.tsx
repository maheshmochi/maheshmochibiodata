import React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Code2,
  Heart,
} from 'lucide-react';

import './footer.css';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/maheshmochi',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/maheshmochi',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/maheshmochi18',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@Maheshcodes18',
    icon: Youtube,
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      {/* Background */}
      <div className="footer-glow footer-glow-left" />
      <div className="footer-glow footer-glow-right" />

      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-brand"
          >
            <a href="#home" className="footer-logo">
              <span className="footer-logo-box">M</span>

              <span className="footer-logo-text">
                <strong>MAHESH</strong>
                <small>FRONTEND DEVELOPER</small>
              </span>
            </a>

            <p className="footer-description">
              B.Sc. IT student at HNGU passionate about Frontend Development,
              React.js, JavaScript and building responsive web experiences.
            </p>

            <div className="footer-code-line">
              <Code2 size={15} />
              <span>Building. Learning. Improving.</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-column"
          >
            <h3>Quick Links</h3>

            <div className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  <span>{link.name}</span>
                  <span className="footer-link-arrow">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-column"
          >
            <h3>Connect</h3>

            <p className="footer-connect-text">
              Let's connect and build something meaningful together.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="footer-social"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="mailto:parmarmahesh.b1234@gmail.com"
              className="footer-email"
            >
              parmarmahesh.b1234@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mahesh. All rights reserved.
          </p>

          <p className="footer-made">
            Made with
            <Heart size={14} />
            & code
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="footer-top-button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}