import { useState } from "react";
import API from "../services/api";
import RectangleImg from "../assets/landingpage_images/Rectangle.svg";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);
      await API.post("/subscribe", { email });
      alert("Subscribed successfully");
      setEmail("");
    } catch (error) {
      alert("Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div
        className="relative h-[420px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${RectangleImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
            Learn more about our listing process, as well as our
            additional staging and design work.
          </h2>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* BLUE BAR */}
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between text-white text-sm">

          {/* NAV LINKS */}
          <div className="flex gap-6 flex-wrap">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
          </div>

          {/* SUBSCRIBE FORM */}
          <form
            onSubmit={handleSubscribe}
            className="flex gap-3 mt-3 md:mt-0"
          >
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm px-2 text-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-blue-600 px-5 py-2 rounded font-semibold hover:bg-gray-100 transition disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
