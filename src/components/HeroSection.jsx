import React from 'react'
import DotGrid from '../components/ui/DotGrid'
import PixelBlast from '../components/ui/PixelBlast';
const HeroSection = () => {
    return (
        <div className='bg-[#060010] '>

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

                    <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <div className="text-center px-4">
                            <div>
                                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up line-2" style={{ marginBottom: '1rem', fontFamily: 'nexa, sans-serif' }}>
                                    Purvanchal Technical <br /> Hackathon
                                </h1>
                            </div>

                            <div>
                                <p className="momo-trust-sans text-white text-xl momo-trust-sans ">2     December 2025</p>
                            </div>

                            <div style={{ marginTop: '2rem' }} className='flex gap-4 justify-center'>
                                <button className='bg-[#1c4980] text-white font-semibold text-lg hover:bg-[#9F7EE8] hover:text-[#060010] transition-all duration-300 transform shadow-lg hover:shadow-xl rounded cursor-pointer flex items-center gap-2' style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <img src='/unstop-btn.png' alt="Unstop" className='h-5 w-5' />
                                    Apply on Unstop
                                </button>
                                <button className='bg-transparent border text-white font-semibold text-lg hover:bg-[#9F7EE8] transition-all duration-300 transform shadow-lg hover:shadow-xl hover:text-[#060010]  rounded cursor-pointer' style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











        </div>
    )
}

export default HeroSection