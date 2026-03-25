import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kr-panel pt-20 pb-10 border-t border-kr-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group cursor-pointer mb-2">
              <img src="/logo.jpg" alt="Mega Fire Protection" className="h-[72px] w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-sm leading-relaxed text-kr-muted max-w-xs">
              Developing and implementing unique and efficient fire protection systems for industrial, commercial, and residential applications throughout Greater Los Angeles.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {['Licensed', 'Bonded', 'Insured'].map((badge) => (
                <span key={badge} className="text-[10px] font-bold text-kr-muted-light uppercase tracking-widest bg-kr-bg px-3 py-1.5 border border-kr-border rounded-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Commercial Series', path: '/commercial' },
                { label: 'Residential Edition', path: '/residential' },
                { label: 'System Upgrades', path: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-kr-muted hover:text-kr-red transition-colors duration-200 text-sm inline-flex items-center gap-1 cursor-pointer group">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'All Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-kr-muted hover:text-kr-red transition-colors duration-200 text-sm inline-flex items-center gap-1 cursor-pointer group">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in Touch</h3>
            <ul className="space-y-3">
              <li><a href="mailto:info@megafireprotection.com" className="text-kr-muted hover:text-kr-red transition-colors duration-200 text-sm cursor-pointer">info@megafireprotection.com</a></li>
              <li><a href="tel:+18005550199" className="text-kr-muted hover:text-kr-red transition-colors duration-200 text-sm cursor-pointer">(800) 555-0199</a></li>
              <li className="text-kr-muted text-sm pt-3 leading-relaxed">
                123 Safety Blvd, Suite 100<br />
                Glendale, CA 91203
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-kr-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-kr-muted">
            &copy; {new Date().getFullYear()} Mega Fire Protection. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-kr-muted">
            <Link to="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
