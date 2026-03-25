import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-kr-bg text-kr-text">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
