import { useState } from 'react';
import logo from '../assets/landingpage_images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT PROJECTS', href: '#projects' },
    { name: 'TESTIMONIALS', href: '#testimonials' }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Real Trust" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}

            {/* admin */}
            <Link
              to="/admin"
              className="px-3 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              ADMIN
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}

            <Link
              to="/admin"
              className="px-3 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              ADMIN
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
