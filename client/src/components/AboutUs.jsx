import About1 from "../assets/landingpage_images/about3.svg";
import About2 from "../assets/landingpage_images/about1.svg";
import About3 from "../assets/landingpage_images/about2.svg";

import BlueSquare from "../assets/landingpage_shapes/Rectangle 54.svg";
import OrangeCorner from "../assets/landingpage_shapes/Subtract-4.svg";
import BlueCorner from "../assets/landingpage_shapes/Subtract.svg";
import SmOrangeCorner from "../assets/landingpage_shapes/Subtract-5.svg";

const AboutUs = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Image + Shapes Area */}
        <div className="relative flex justify-center mb-24">

          {/* SHAPES */}
          <img
            src={BlueSquare}
            alt=""
            className="absolute left-[22%] top-[10%] w-10 pointer-events-none"
          />

          <img
            src={OrangeCorner}
            alt=""
            className="absolute left-[28%] top-[45%] w-8 pointer-events-none"
          />

          <img
            src={BlueCorner}
            alt=""
            className="absolute right-[28%] top-[15%] w-8 pointer-events-none"
          />

          <img
            src={SmOrangeCorner}
            alt=""
            className="absolute right-[22%] bottom-[28%] w-7 pointer-events-none"
          />

          {/* === IMAGES === */}

          {/* Left small image */}
          <div className="absolute left-[18%] top-[25%] w-36 h-36 rounded-lg overflow-hidden shadow-md">
            <img
              src={About1}
              alt="Property visit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center main image */}
          <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg z-10">
            <img
              src={About2}
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right small image */}
          <div className="absolute right-[18%] top-[30%] w-36 h-36 rounded-lg overflow-hidden shadow-md">
            <img
              src={About3}
              alt="Happy clients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            About Us
          </h2>

          <div className="w-14 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
            We are committed to delivering exceptional real estate services and
            building strong customer relationships. Our experienced team
            ensures transparency, trust, and personalized guidance throughout
            every step of your journey.
          </p>

          <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
            LEARN MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
