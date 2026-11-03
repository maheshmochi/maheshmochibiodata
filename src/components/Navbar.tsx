
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language.split('-')[0];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'mr', label: 'Marathi' },
  ];

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Escape Key + Resize
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setLanguageOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Outside Click
  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, []);

  // Language Change
  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  // Navigation
  const handleNavigation = (href: string) => {
    setMobileOpen(false);
    setLanguageOpen(false);

    if (href.startsWith('#')) {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  const themeLabel =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleNavigation('#home')}
          aria-label="Mahesh Home"
        >
          <motion.div
            className="navbar-logo-icon"
            whileHover={{ rotate: 8, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <span>M</span>
            <div className="logo-glow" />
          </motion.div>

          <div className="navbar-brand">
            <span className="brand-name">MAHESH</span>
            <span className="brand-role">DEVELOPER</span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => handleNavigation(link.href)}
              className="nav-link"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              {link.name}
              <span className="nav-link-line" />
            </motion.a>
          ))}

          {/* LANGUAGE DROPDOWN */}
          <div className="language-wrapper" ref={languageRef}>
            <button
              type="button"
              className={`nav-action language-trigger ${
                languageOpen ? 'action-active' : ''
              }`}
              onClick={() => setLanguageOpen((open) => !open)}
              aria-label="Change language"
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <Globe size={17} />
              <span>{currentLanguage.toUpperCase()}</span>

              <ChevronDown
                size={14}
                className={languageOpen ? 'chevron-open' : ''}
              />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  className="language-dropdown"
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  role="menu"
                >
                  <div className="dropdown-heading">
                    Select Language
                  </div>

                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      role="menuitem"
                      onClick={() => changeLanguage(language.code)}
                      className={`language-option ${
                        currentLanguage === language.code
                          ? 'language-selected'
                          : ''
                      }`}
                    >
                      <span>{language.label}</span>

                      {currentLanguage === language.code && (
                        <span className="language-check">✓</span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* THEME TOGGLE */}
          <motion.button
            type="button"
            className="nav-action theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.08, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                >
                  <Sun size={19} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                >
                  <Moon size={19} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="mobile-actions">

          {/* MOBILE THEME */}
          <motion.button
            type="button"
            className="nav-action mobile-theme"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label={themeLabel}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </motion.button>

          {/* MENU BUTTON */}
          <motion.button
            type="button"
            className={`nav-action mobile-menu-button ${
              mobileOpen ? 'menu-active' : ''
            }`}
            onClick={() => setMobileOpen((open) => !open)}
            whileTap={{ scale: 0.9 }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="mobile-nav-link"
                >
                  <span className="mobile-link-number">
                    0{index + 1}
                  </span>

                  <span>{link.name}</span>

                  <ArrowUpRight size={17} className="mobile-link-arrow" />
                </motion.a>
              ))}
            </nav>

            {/* MOBILE LANGUAGE */}
            <div className="mobile-language">
              <div className="mobile-language-heading">
                <Globe size={16} />
                <span>Language</span>
              </div>

              <div className="mobile-language-options">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    className={
                      currentLanguage === language.code
                        ? 'mobile-language-selected'
                        : ''
                    }
                  >
                    {language.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* MOBILE FOOTER */}
            <div className="mobile-menu-footer">
              <div>
                <Sparkles size={14} />
                <span>MAHESH · DEVELOPER</span>
              </div>

              <span className="mobile-status">
                <span />
                Available to connect
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
