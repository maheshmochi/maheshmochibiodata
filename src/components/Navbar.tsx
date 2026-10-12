
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
} from 'lucide-react';

import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

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

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menus with Escape and close mobile menu on desktop resize
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

  // Close language dropdown when clicking outside
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

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleNavigation = (href: string) => {
    setMobileOpen(false);
    setLanguageOpen(false);

    // Allow normal navigation to the requested section.
    if (href.startsWith('#')) {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const themeLabel =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 pointer-events-auto',
        scrolled
          ? 'py-3 glass-panel border-x-0 border-t-0 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          onClick={() => handleNavigation('#home')}
          aria-label="Mahesh home"
          className="group relative flex items-center gap-2.5 shrink-0"
        >
          <div
            className={cn(
              'relative w-10 h-10 rounded-xl glass-panel',
              'border border-white/10 flex items-center justify-center',
              'overflow-hidden transition-all duration-300',
              'group-hover:border-[#9d4edd]/60',
              'group-hover:shadow-[0_0_25px_rgba(157,78,221,0.35)]',
              'group-hover:scale-105'
            )}
          >
            <div className="absolute inset-0 bg-[#9d4edd]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative text-xl font-display font-bold text-[#9d4edd] group-hover:text-[#e0c3fc] transition-colors">
              M
            </span>
          </div>

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-display font-bold tracking-[0.18em] text-sm">
              MAHESH
            </span>

            <span className="text-white/40 text-[9px] tracking-[0.25em] mt-1.5">
              DEVELOPER
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex gap-4 lg:gap-6 items-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavigation(link.href)}
              className={cn(
                'group relative text-white/70 hover:text-white',
                'transition-colors duration-300 text-xs lg:text-sm',
                'uppercase tracking-wider font-mono py-2',
                'focus-visible:outline-none focus-visible:text-white'
              )}
            >
              {link.name}

              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#9d4edd] shadow-[0_0_8px_rgba(157,78,221,0.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* DESKTOP LANGUAGE MENU */}
          <div ref={languageRef} className="relative ml-1">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg',
                'text-white/70 hover:text-white hover:bg-white/5',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[#9d4edd]'
              )}
              aria-label="Change language"
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <Globe
                size={17}
                className="text-[#9d4edd]"
              />

              <span className="text-sm font-mono uppercase">
                {currentLanguage}
              </span>

              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform duration-200',
                  languageOpen && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  role="menu"
                  className={cn(
                    'absolute top-full right-0 mt-3 py-2 w-40',
                    'glass-panel rounded-xl border border-white/10',
                    'shadow-[0_15px_40px_rgba(0,0,0,0.4)]',
                    'overflow-hidden'
                  )}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      role="menuitem"
                      onClick={() => changeLanguage(language.code)}
                      className={cn(
                        'w-full px-4 py-3 text-sm text-left',
                        'transition-colors duration-200',
                        currentLanguage === language.code
                          ? 'text-[#c084fc] bg-[#9d4edd]/15'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      <span className="flex items-center justify-between">
                        {language.label}

                        {currentLanguage === language.code && (
                          <span className="text-[#9d4edd]">✓</span>
                        )}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESKTOP THEME TOGGLE */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={toggleTheme}
            className={cn(
              'relative w-10 h-10 rounded-xl glass-panel',
              'border border-white/10 flex items-center justify-center',
              'text-white/70 hover:text-[#c084fc]',
              'hover:border-[#9d4edd]/50',
              'hover:shadow-[0_0_20px_rgba(157,78,221,0.2)]',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[#9d4edd]'
            )}
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
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden flex items-center gap-2">

          {/* MOBILE THEME TOGGLE */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className={cn(
              'w-10 h-10 rounded-xl glass-panel',
              'border border-white/10 flex items-center justify-center',
              'text-white/80 hover:text-[#c084fc]',
              'hover:border-[#9d4edd]/50 transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[#9d4edd]'
            )}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'dark' ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'w-10 h-10 rounded-xl glass-panel',
              'border border-white/10 flex items-center justify-center',
              'text-white/80 hover:text-white',
              'hover:border-[#9d4edd]/50',
              'hover:shadow-[0_0_20px_rgba(157,78,221,0.2)]',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[#9d4edd]'
            )}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={cn(
              'md:hidden absolute top-full left-0 right-0',
              'glass-panel border-t border-white/10',
              'border-b border-white/10 px-5 sm:px-6 py-4',
              'overflow-hidden',
              'shadow-[0_20px_40px_rgba(0,0,0,0.35)]'
            )}
          >
            {/* MOBILE LINKS */}
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={cn(
                    'group text-white/80 hover:text-white',
                    'py-4 border-b border-white/5',
                    'text-sm uppercase tracking-wider font-mono',
                    'flex items-center justify-between',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:text-[#c084fc]'
                  )}
                >
                  <span>{link.name}</span>

                  <span className="text-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* MOBILE LANGUAGES */}
            <div className="flex items-center flex-wrap gap-3 pt-5">
              <Globe size={16} className="text-[#9d4edd]" />

              {languages.map((language, index) => (
                <div key={language.code} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-white/20">/</span>
                  )}

                  <button
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    aria-pressed={currentLanguage === language.code}
                    className={cn(
                      'text-xs font-mono transition-colors',
                      currentLanguage === language.code
                        ? 'text-[#c084fc]'
                        : 'text-white/50 hover:text-white'
                    )}
                  >
                    {language.code.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>

            {/* MOBILE FOOTER */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                MAHESH · DEVELOPER
              </span>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
