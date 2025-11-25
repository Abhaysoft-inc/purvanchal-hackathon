import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Footer/>
        </div>
    )
}

export default LandingPage