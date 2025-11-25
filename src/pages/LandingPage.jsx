import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Faqs from '../components/Faqs.jsx'

import Timeline from '../components/Timeline.jsx'
import Faqs from '../components/Faqs.jsx'
import Footer from '../components/Footer.jsx'
import Tracks from '../components/Tracks.jsx'
import Prizes from '../components/Prizes.jsx'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Prizes />
            <Tracks />
            <Timeline />
            <Faqs />
            <Footer />

        </div>
    )
}

export default LandingPage