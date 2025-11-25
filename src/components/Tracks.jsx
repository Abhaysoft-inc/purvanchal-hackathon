import { FaCity, FaHeartbeat, FaLeaf, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

export default function Tracks() {
    return (
        <div className="bg-[#060010] min-h-screen text-white">

            {/* Track Section */}
            <div className="px-4 py-6">
                <h1 className="text-[#52ca84] font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
                    TRACKS
                </h1>

                <div className="mt-8 flex justify-center flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12">


                    {/* Card 1 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <FaCity className="text-[#B19EEF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            Smart Cities & Sustainable Urban Tech
                        </p>
                    </div>



                    {/* Card 2 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <FaHeartbeat className="text-[#9F7EE8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            AI-Powered Health & Well-Being Solutions
                        </p>
                    </div>


                    {/* Card 3 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <FaLeaf className="text-[#52ca84] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            Clean Energy, Climate Action & GreenTech
                        </p>
                    </div>


                    {/* Card 4 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <FaShieldAlt className="text-[#B19EEF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            Next Gen Cyber Threat Detection and Response
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <FaBookOpen className="text-[#9F7EE8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            Inclusive Education & Digital Equality
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="w-60 h-80 sm:w-72 sm:h-80 md:w-80 md:h-85 lg:w-85 lg:h-90 bg-white/5 border border-white/30 rounded-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <div className="icon-heart-pulse"></div>
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            Open Innovation
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}