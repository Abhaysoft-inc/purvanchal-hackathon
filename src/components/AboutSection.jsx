import React, { useEffect, useRef } from 'react'

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className='bg-[#060010] relative overflow-hidden h-screen px-4 md:px-8 lg:px-12 py-6 md:py-8' ref={sectionRef}>
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="flex items-center justify-center py-4 md:py-6 animate-on-scroll">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-[white] to-[white] bg-clip-text text-transparent" style={{ fontFamily: 'nexa, sans-serif' }}>
                        ABOUT
                    </h2>
                </div>

                <div className="flex justify-center flex-1 overflow-hidden">
                    <div className="w-full max-w-7xl grid lg:grid-cols-[58%_42%] items-center gap-6 md:gap-8">

                        <div className="space-y-4 md:space-y-6 animate-on-scroll animation-delay-200 px-4 md:px-8 lg:px-12 py-4 md:py-6 bg-transparent flex flex-col justify-center">
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-gray-200 text-base md:text-lg leading-relaxed tracking-wide font-light" style={{ wordSpacing: '0.1em', letterSpacing: '0.02em' }}>
                                    <span className="text-[#B19EEF] font-semibold">Google Developer Group KNIT Sultanpur</span> presents{' '}
                                    <span className="text-[#9F7EE8] font-bold">Purvanchal Technical Hackathon</span> on December 2, 2025.
                                    This flagship event brings together passionate developers, creative thinkers, and innovative teams from across the region.
                                </p>

                                <p className="text-gray-200 text-base md:text-lg leading-relaxed tracking-wide font-light" style={{ wordSpacing: '0.1em', letterSpacing: '0.02em' }}>
                                    <span className="text-[#B19EEF] font-semibold">Gear up your tech stack</span>, brainstorm bold ideas, unite as a team, and build
                                    solutions that matter at{' '}
                                    <span className="text-[#9F7EE8] font-bold">Purvanchal Technical Hackathon</span> - the signature hackathon experience at KNIT Sultanpur!
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 pt-4 md:pt-6">
                                <button className="bg-[#1c4980] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-[#9F7EE8] hover:text-[#060010] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Register Now
                                </button>
                                <button className="bg-transparent border-2 border-[#9F7EE8] text-[#B19EEF] font-semibold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-[#9F7EE8] hover:text-[#060010] transition-all duration-300 transform hover:scale-105">
                                    View Tracks
                                </button>
                            </div>
                        </div>

                        <div className="relative animate-on-scroll animation-delay-400 justify-self-center hidden lg:block">
                            <div className="relative group max-w-lg mx-auto w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#9F7EE8]/20 to-[#1c4980]/20 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                                <div className="relative">
                                    <img
                                        src="/Gemini_Generated_Image_jl3ypajl3ypajl3y-removebg-preview.png"
                                        alt="HackTU 7.0 - Hackathon Illustration"
                                        className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection