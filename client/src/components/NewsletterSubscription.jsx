import RectangleImg from '../assets/landingpage_images/Rectangle.svg'

const NewsletterSubscription = () => {
    return (
        <section className="w-full">

            {/* HERO SECTION */}
            <div
                className="relative h-[420px] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${RectangleImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl px-6">
                    <h2 className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-6">
                        Learn more about our listing process, as well as our
                        additional staging and design work.
                    </h2>

                    <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-gray-100 transition">
                        LEARN MORE
                    </button>
                </div>
            </div>

            {/* BLUE BAR */}
            <div className="bg-blue-600 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between text-white text-sm">

                    {/* NAV LINKS */}
                    <div className="flex gap-6 flex-wrap">
                        <a href="#" className="hover:opacity-80">Home</a>
                        <a href="#" className="hover:opacity-80">Services</a>
                        <a href="#" className="hover:opacity-80">Projects</a>
                        <a href="#" className="hover:opacity-80">Testimonials</a>
                        <a href="#" className="hover:opacity-80">Contact</a>
                    </div>

                    {/* SUBSCRIBE */}
                    <div className="flex gap-3 mt-3 md:mt-0">
                        <input type="email" placeholder='email' className='outline-2 outline-white rounded-sm px-2' />

                        <button className="bg-white text-blue-600 px-5 py-2 rounded font-semibold hover:bg-gray-100 transition">
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default NewsletterSubscription;
