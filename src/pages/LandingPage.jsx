import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Faqs from '../components/Faqs.jsx'
import Timeline from '../components/Timeline.jsx'
import Footer from '../components/Footer.jsx'
import Tracks from '../components/Tracks.jsx'
import Prizes from '../components/Prizes.jsx'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <section id="about">
                <AboutSection />
            </section>
            <section id="prizes" >
                <Prizes />
            </section>
            <section id="tracks">
                <Tracks />
            </section>
            <section id="timeline">
                <Timeline />
            </section>
            <section id="faqs">
                <Faqs />
            </section>
            <section id="sponsors">
                {/* Add sponsors content here if available */}
            </section>
            <Footer />
        </div>
    )
}

export default LandingPage