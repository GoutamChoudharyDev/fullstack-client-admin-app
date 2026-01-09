import { useState } from 'react';
import logo from '../../assets/landingpage_images/logo.svg';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Add Project', path: 'projects' },
    { name: 'Add Client', path: 'clients' },
    { name: 'View Contacts', path: 'contacts' },
    { name: 'Subscribers', path: 'subscribers' }
  ];

  // Show hero only on root/admin dashboard
  const showHero = location.pathname === '/admin' || location.pathname === '/admin/';

  return (
    <div className="min-h-screen bg-[#f0f4ff] flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Admin Logo" className="h-10" />
            </div>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md transition ${
                    location.pathname.includes(link.path)
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="md:hidden mt-2 flex flex-col gap-2 px-6 pb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md transition ${
                    location.pathname.includes(link.path)
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        {/* Hero Section - only show on dashboard */}
        {showHero ? (
          <section className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Welcome to the Admin Panel
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Manage your projects, clients, contacts, and subscribers efficiently.
            </p>
          </section>
        ) : (
          // Outlet for other pages
          <div className="min-h-[500px] w-full max-w-7xl">
            <Outlet />
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminLayout;
