import logo from '../assets/landingpage_images/logo.svg'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* If you have logo image */}
            <img src={logo} alt="Real Trust" className="h-8" />

            {/* <span className="text-xl font-bold text-gray-900">
              Real <span className="text-gray-700">Trust</span>
            </span> */}
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#home"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              HOME
            </a>

            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              SERVICES
            </a>

            <a
              href="#projects"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              ABOUT PROJECTS
            </a>

            <a
              href="#testimonials"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              TESTIMONIALS
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition"
            >
              CONTACT
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
