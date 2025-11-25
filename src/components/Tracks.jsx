import { FaCity, FaHeartbeat, FaLeaf, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

export default function Tracks() {
    return (
        <div className="bg-[#060010] min-h-screen text-white pt-8 md:pt-12">
            {/* Added top padding so nothing overlaps */}

            <div className="px-4 py-6">
                <h1 className="text-[white] font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" style={{ fontFamily: 'nexa, sans-serif' }}>
                    TRACKS
                </h1>

                <div className="mt-10 flex justify-center flex-wrap gap-6">

                    {/* Reusable card class */}
                    {[
                        {
                            icon: <FaCity className="text-[#B19EEF]" />,
                            text: "Smart Cities & Sustainable Urban Tech"
                        },
                        {
                            icon: <FaHeartbeat className="text-[#9F7EE8]" />,
                            text: "AI-Powered Health & Well-Being Solutions"
                        },
                        {
                            icon: <FaLeaf className="text-[#52ca84]" />,
                            text: "Clean Energy, Climate Action & GreenTech"
                        },
                        {
                            icon: <FaShieldAlt className="text-[#B19EEF]" />,
                            text: "Next Gen Cyber Threat Detection and Response"
                        },
                        {
                            icon: <FaBookOpen className="text-[#9F7EE8]" />,
                            text: "Inclusive Education & Digital Equality"
                        },
                        {
                            icon: <FaLeaf className="text-[#52ca84]" />,
                            text: "Open Innovations"
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="w-44 h-52 sm:w-56 sm:h-64 md:w-64 md:h-72
           bg-white/5 border border-white/20 rounded-2xl backdrop-blur-md
           p-5 flex flex-col items-center justify-center text-center
           shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
                        >
                            <div className="text-4xl sm:text-5xl mb-3">
                                {card.icon}
                            </div>
                            <p className="text-white text-sm sm:text-base font-semibold leading-snug">
                                {card.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
