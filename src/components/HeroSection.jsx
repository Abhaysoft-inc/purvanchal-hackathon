import React, { useState, useEffect } from 'react'
import DotGrid from '../components/ui/DotGrid'
import PixelBlast from '../components/ui/PixelBlast';

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-12-02T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    secs: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[#060010] w-full'>
            <div style={{ width: '100%', position: 'relative' }} className='h-screen'>
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                    className={'opacity-40'}
                />
                <div className="hero-text absolute inset-0">
                    {/* sponsor and organiser logo */}
                    <div className="flex justify-center">
                        <div className="logos absolute top-15 left-1/2 transform -translate-x-1/2 flex items-center gap-2 justify-center">
                            <img src='/foot-logo.png' className='h-12 md:h-16' />
                            <div className="w-px h-8 bg-gray-400"></div>
                            <img src='/gdg-logo.png' className='h-12 md:h-16' />
                        </div>
                    </div>

                    <p className="absolute top-30 left-1/2 transform -translate-x-1/2 text-white text-lg font momo-trust-sans">Presents</p>

                    <div className="absolute top-100 md:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <div className="text-center px-4">
                            <div>
                                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up line-2" style={{ marginBottom: '1rem', fontFamily: 'nexa, sans-serif' }}>
                                    <span
                                        style={{
                                            fontSize: '5.5vh',
                                            fontFamily: 'nexa, sans-serif',
                                            marginBottom: '1rem',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            lineHeight: 1.1,
                                            display: 'inline-block',
                                        }}
                                        className="animate-fade-in-up line-2"
                                    >
                                        Purvanchal Technical <br /> Hackathon
                                    </span>
                                </h1>
                            </div>

                            <div className="mt-4">
                                <p className="momo-trust-sans text-white text-2xl momo-trust-sans">2nd December 2025</p>
                            </div>

                            <div className='flex gap-4 justify-center mt-8'>
                                <a
                                    href="https://unstop.com/hackathons/purvanchal-technical-hackathon-kamla-nehru-institute-of-technology-knit-sultanpur-1600541"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-[#1c4980] text-white font-semibold text-lg hover:bg-[#9F7EE8] hover:text-[#060010] transition-all duration-300 transform shadow-lg hover:shadow-xl rounded cursor-pointer flex items-center gap-2'
                                    style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
                                >
                                    <img src='/unstop-btn.png' alt="Unstop" className='h-5 w-5' />
                                    Apply on Unstop
                                </a>
                                <button className='bg-transparent border text-white font-semibold text-lg hover:bg-[#9F7EE8] transition-all duration-300 transform shadow-lg hover:shadow-xl hover:text-[#060010] rounded cursor-pointer hidden md:block' style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                                    Learn More
                                </button>
                            </div>

                            {/* Countdown Timer - Mobile Only */}
                            <div className="md:hidden mt-10">
                                <h2 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'nexa, sans-serif', letterSpacing: '0.15em' }}>
                                    LIVE IN
                                </h2>
                                <div className="flex justify-center gap-4">
                                    <div className="border-2 border-white/30 rounded-lg p-4 min-w-[75px] backdrop-blur-sm bg-white/5">
                                        <div className="text-white text-3xl font-bold">{timeLeft.days}</div>
                                        <div className="text-white/70 text-sm mt-1">days</div>
                                    </div>
                                    <div className="border-2 border-white/30 rounded-lg p-4 min-w-[75px] backdrop-blur-sm bg-white/5">
                                        <div className="text-white text-3xl font-bold">{timeLeft.hours}</div>
                                        <div className="text-white/70 text-sm mt-1">hours</div>
                                    </div>
                                    <div className="border-2 border-white/30 rounded-lg p-4 min-w-[75px] backdrop-blur-sm bg-white/5">
                                        <div className="text-white text-3xl font-bold">{timeLeft.mins}</div>
                                        <div className="text-white/70 text-sm mt-1">mins</div>
                                    </div>
                                    <div className="border-2 border-white/30 rounded-lg p-4 min-w-[75px] backdrop-blur-sm bg-white/5">
                                        <div className="text-white text-3xl font-bold">{timeLeft.secs}</div>
                                        <div className="text-white/70 text-sm mt-1">secs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection