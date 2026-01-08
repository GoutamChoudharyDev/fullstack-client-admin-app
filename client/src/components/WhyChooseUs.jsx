import Img1 from "../assets/landingpage_images/Ellipse_11.svg";
import Img2 from "../assets/landingpage_images/Ellipse_12.svg";
import Img3 from "../assets/landingpage_images/Ellipse_13.svg";
import dollarIcon from "../assets/landingpage_icons/circle-dollar-sign.svg";
import homeIcon from "../assets/landingpage_icons/home.svg";
import paintBrushIcon from "../assets/landingpage_icons/paintbrush-2.svg";

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-blue-600 font-semibold mb-4">
                            Not Your Average Realtor
                        </h3>

                        <p className="text-gray-600 max-w-md leading-relaxed">
                            We combine industry expertise with innovative strategies to help
                            you buy, sell, and invest with confidence. Our goal is to make
                            your real estate journey smooth and rewarding.
                        </p>
                    </div>

                    {/* Right Circular Images */}
                    <div className="relative flex justify-center items-center">

                        {/* Decorative dots */}
                        <span className="absolute top-2 left-12 w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span className="absolute bottom-10 left-6 w-3 h-3 bg-orange-500 rounded-full"></span>

                        {/* Main Image */}
                        <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
                            <img src={Img1} alt="Realtor" className="w-full h-full object-cover" />
                        </div>

                        {/* Small Top Image */}
                        <div className="absolute -top-4 right-12 w-36 h-36 rounded-full overflow-hidden shadow-md bg-white">
                            <img src={Img2} alt="Clients" className="w-full h-full object-cover" />
                        </div>

                        {/* Small Bottom Image */}
                        <div className="absolute -bottom-6 right-0 w-36 h-36 rounded-full overflow-hidden shadow-md bg-white">
                            <img src={Img3} alt="Success" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Why Choose Us?
                    </h2>
                    <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 mb-12"></div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Item 1 */}
                        <div className="text-center">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <img src={dollarIcon} alt="ROI" className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold mb-2">Potential ROI</h4>
                            <p className="text-gray-600 text-sm">
                                We help maximize your investment returns with expert insights.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="text-center">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <img src={paintBrushIcon} alt="Design" className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold mb-2">Design</h4>
                            <p className="text-gray-600 text-sm">
                                Thoughtfully designed solutions tailored to your goals.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="text-center">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <img src={homeIcon} alt="Marketing" className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold mb-2">Marketing</h4>
                            <p className="text-gray-600 text-sm">
                                Strategic marketing that drives visibility and results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
