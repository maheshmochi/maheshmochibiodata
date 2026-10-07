import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-react';

import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: t('nav.about'),
      href: '#about',
    },
    {
      name: t('nav.skills'),
      href: '#skills',
    },
    {
      name: t('nav.projects'),
      href: '#projects',
    },
    {
      name: t('nav.experience'),
      href: '#experience',
    },
    {
      name: t('nav.contact'),
      href: '#contact',
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto',

        scrolled
          ? 'py-4 glass-panel border-x-0 border-t-0 border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          aria-label="Mahesh Home"
          className="group relative flex items-center gap-2"
        >
          <div className="relative w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#9d4edd]/60 group-hover:shadow-[0_0_25px_rgba(157,78,221,0.35)] group-hover:scale-105">

            <div className="absolute inset-0 bg-[#9d4edd]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative text-xl font-display font-bold text-[#9d4edd] group-hover:text-[#e0c3fc] transition-colors">
              M
            </span>
          </div>

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-display font-bold tracking-[0.18em] text-sm">
              MAHESH
            </span>

            <span className="text-white/40 text-[9px] tracking-[0.25em] mt-1">
              DEVELOPER
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex gap-5 lg:gap-7 items-center">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-white/70 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-mono py-2"
            >
              {link.name}

              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#9d4edd] shadow-[0_0_8px_rgba(157,78,221,0.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* LANGUAGE */}
          <div className="relative group ml-1">

            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              id="btn-lang"
              aria-label="Change language"
            >
              <Globe
                size={18}
                className="group-hover:text-[#9d4edd] transition-colors"
              />

              <span className="text-sm font-mono uppercase">
                {i18n.language}
              </span>
            </button>

            <div className="absolute top-full right-0 mt-3 py-2 w-36 glass-panel rounded-xl border border-white/10 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]">

              <button
                onClick={() => changeLanguage('en')}
                className={cn(
                  'w-full px-4 py-2.5 text-sm text-left transition-colors',

                  i18n.language === 'en'
                    ? 'text-[#9d4edd] bg-[#9d4edd]/10'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                English
              </button>

              <button
                onClick={() => changeLanguage('hi')}
                className={cn(
                  'w-full px-4 py-2.5 text-sm text-left transition-colors',

                  i18n.language === 'hi'
                    ? 'text-[#9d4edd] bg-[#9d4edd]/10'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                Hindi
              </button>

              <button
                onClick={() => changeLanguage('mr')}
                className={cn(
                  'w-full px-4 py-2.5 text-sm text-left transition-colors',

                  i18n.language === 'mr'
                    ? 'text-[#9d4edd] bg-[#9d4edd]/10'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                Marathi
              </button>

            </div>
          </div>

          {/* THEME TOGGLE */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleThemeToggle}
            className="relative w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-white/70 hover:text-[#9d4edd] hover:border-[#9d4edd]/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.2)] transition-all duration-300"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? 'Light Mode'
                : 'Dark Mode'
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                >
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-2">

          {/* Mobile Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="w-11 h-11 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-white/80 hover:text-[#9d4edd] hover:border-[#9d4edd]/50 transition-all duration-300"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            className="w-11 h-11 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-[#9d4edd]/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.2)] transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="btn-mobile-menu"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              y: -20,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/5 border-b border-white/10 px-6 py-5 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            {/* Mobile Links */}
            <div className="flex flex-col">

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="group text-white/80 hover:text-white py-4 border-b border-white/5 text-sm uppercase tracking-wider font-mono flex items-center justify-between transition-colors"
                >
                  <span>
                    {link.name}
                  </span>

                  <span className="text-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              ))}

            </div>

            {/* Mobile Languages */}
            <div className="flex items-center gap-3 pt-5">

              <Globe
                size={16}
                className="text-white/40"
              />

              <button
                onClick={() => changeLanguage('en')}
                className={cn(
                  'text-sm font-mono transition-colors',

                  i18n.language === 'en'
                    ? 'text-[#9d4edd]'
                    : 'text-white/50 hover:text-white'
                )}
              >
                EN
              </button>

              <span className="text-white/20">
                /
              </span>

              <button
                onClick={() => changeLanguage('hi')}
                className={cn(
                  'text-sm font-mono transition-colors',

                  i18n.language === 'hi'
                    ? 'text-[#9d4edd]'
                    : 'text-white/50 hover:text-white'
                )}
              >
                HI
              </button>

              <span className="text-white/20">
                /
              </span>

              <button
                onClick={() => changeLanguage('mr')}
                className={cn(
                  'text-sm font-mono transition-colors',

                  i18n.language === 'mr'
                    ? 'text-[#9d4edd]'
                    : 'text-white/50 hover:text-white'
                )}
              >
                MR
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}