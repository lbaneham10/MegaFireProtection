import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Residential', path: '/residential' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b',
        isScrolled
          ? 'bg-kr-bg/95 backdrop-blur-xl border-kr-border py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group cursor-pointer">
            <img 
              src="/logo.jpg" 
              alt="Mega Fire Protection" 
              className="h-[86px] w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-xs font-semibold transition-colors duration-200 uppercase tracking-widest cursor-pointer relative py-1',
                  location.pathname === link.path 
                    ? 'text-kr-red' 
                    : 'text-kr-muted-light hover:text-white'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-kr-red"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a 
              href="tel:+18005550199" 
              className="hidden md:flex items-center gap-2 text-kr-muted-light hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Phone size={14} className="text-kr-red" />
              <span className="text-xs font-semibold tracking-wider">(800) 555-0199</span>
            </a>

            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-white hover:text-kr-red transition-colors duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-kr-bg/98 backdrop-blur-xl border-b border-kr-border shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'block text-sm font-semibold py-4 px-4 transition-all duration-200 uppercase tracking-wider rounded-sm cursor-pointer',
                      location.pathname === link.path
                        ? 'text-kr-red bg-kr-panel'
                        : 'text-kr-text hover:bg-kr-panel hover:text-kr-red'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-2 border-t border-kr-border space-y-3">
                <a 
                  href="tel:+18005550199" 
                  className="flex items-center gap-3 text-white px-4 py-3 cursor-pointer"
                >
                  <Phone size={16} className="text-kr-red" />
                  <span className="text-sm font-semibold">(800) 555-0199</span>
                </a>
                <Button href="/contact" variant="primary" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
