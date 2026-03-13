import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
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
    { name: 'Products', path: '/services' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Residential', path: '/residential' },
    { name: 'Company', path: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b',
        isScrolled
          ? 'bg-kr-bg/90 backdrop-blur-md border-kr-border py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <ShieldCheck size={32} className="text-kr-red" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none text-white uppercase">
                MEGA FIRE
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-kr-muted mt-1">
                Protection
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-kr-red uppercase tracking-wider text-xs',
                  location.pathname === link.path ? 'text-kr-red' : 'text-kr-text'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm">
                Contact Us
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-white hover:text-kr-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-kr-panel border-b border-kr-border shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium py-3 px-4 transition-colors uppercase tracking-wider',
                    location.pathname === link.path
                      ? 'text-kr-red bg-kr-bg'
                      : 'text-kr-text hover:bg-kr-bg hover:text-kr-red'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-kr-border">
                <Button href="/contact" variant="primary" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
