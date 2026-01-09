import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import WhyChooseUs from '../../components/WhyChooseUs'
import AboutUs from '../../components/AboutUs'
import OurProjects from '../../components/OurProjects'
import HappyClient from '../../components/HappyClient'
import Footer from '../../components/Footer'
import NewsletterSubscription from '../../components/NewsletterSubscription'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyChooseUs />
            <AboutUs />
            <OurProjects />
            <HappyClient />
            <NewsletterSubscription />
            <Footer />
        </>
    )
}

export default HomePage
