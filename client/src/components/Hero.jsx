import HeroBg from '../assets/landingpage_images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full min-h-[90vh] flex items-center"
            style={{
                backgroundImage:
                    `url(${HeroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
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

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
                            />

                            <textarea
                                rows="3"
                                placeholder="Message"
                                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 placeholder-gray-300 focus:outline-none focus:border-orange-500"
                            />

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-md"
                            >
                                GET A FREE CONSULTATION
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
