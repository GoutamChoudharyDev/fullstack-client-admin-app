import logo from '../assets/landingpage_images/logo.svg'
import twitterLogo from '../assets/landingpage_icons/twitter.svg'
import instagramLogo from '../assets/landingpage_icons/instagram.svg'
import facebookLogo from '../assets/landingpage_icons/facebook.svg'
import linkedInLogo from '../assets/landingpage_icons/Linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-[#1b1f2f] border-t border-[#2b3350]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT TEXT */}
        <p className="text-xs text-white">
          © 2023 Powered by XYZ
        </p>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Real Trust" className="h-4" />
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-3">

          {/* ICON WRAPPER = WHITE BG */}
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src={twitterLogo} alt="Twitter" className="h-3" />
          </div>

          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src={facebookLogo} alt="Facebook" className="h-3" />
          </div>

          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src={instagramLogo} alt="Instagram" className="h-3" />
          </div>

          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src={linkedInLogo} alt="LinkedIn" className="h-3" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
