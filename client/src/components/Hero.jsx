import { useState } from "react";
import API from "../services/api.js";
import HeroBg from "../assets/landingpage_images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/contact", formData);
      alert("Form submitted successfully");

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (error) {
      alert("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Consultation, <br />
              Design, <br />
              & Marketing
            </h1>
          </div>

          {/* Right Form */}
          <div className="bg-[#2f3f64] rounded-lg p-8 text-white max-w-md ml-auto">
            <h3 className="text-xl font-semibold mb-6">
              Get a Free Consultation
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="mobile"
                placeholder="Phone Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-md disabled:opacity-60"
              >
                {loading ? "Submitting..." : "GET A FREE CONSULTATION"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
