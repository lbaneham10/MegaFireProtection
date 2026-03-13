import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kr-panel pt-24 pb-12 border-t border-kr-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
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
            <p className="text-sm leading-relaxed text-kr-muted max-w-sm">
              Developing and implementing unique and efficient fire protection systems for industrial, commercial, and residential applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Products</h3>
            <ul className="space-y-4">
              <li><Link to="/commercial" className="text-kr-muted hover:text-kr-red transition-colors text-sm">Commercial Series</Link></li>
              <li><Link to="/residential" className="text-kr-muted hover:text-kr-red transition-colors text-sm">Residential Edition</Link></li>
              <li><Link to="/services" className="text-kr-muted hover:text-kr-red transition-colors text-sm">System Upgrades</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-kr-muted hover:text-kr-red transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-kr-muted hover:text-kr-red transition-colors text-sm">Capabilities</Link></li>
              <li><Link to="/contact" className="text-kr-muted hover:text-kr-red transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Get in touch</h3>
            <ul className="space-y-4">
              <li><a href="mailto:info@megafireprotection.com" className="text-kr-muted hover:text-kr-red transition-colors text-sm">info@megafireprotection.com</a></li>
              <li><a href="tel:+18005550199" className="text-kr-muted hover:text-kr-red transition-colors text-sm">+1 (800) 555-0199</a></li>
              <li className="text-kr-muted text-sm pt-4">
                123 Safety Blvd, Suite 100<br />
                Glendale, CA 91203
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-kr-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-kr-muted">
            &copy; <span className="year">{new Date().getFullYear()}</span> Mega Fire Protection. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-kr-muted">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
