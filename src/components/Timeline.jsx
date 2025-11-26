export default function Timeline() {
    const timelineData = [
        {
            number: "1",
            heading: "Registrations Open",
            text: (
                <>
                    <b>From 25 November 2025</b><br />
                    All Aboard! Save your spot at Purvanchal student-run hackathon By Google Developer Group on Campus KNIT.
                </>
            )
        },
        {
            number: "2",
            heading: "Registrations Close",
            text: (
                <>
                    <b>Last date - 18 Feb 2026 at 11:59 PM</b><br />
                    Gate Closes - Last chance to join the hacker caravan.
                </>
            )
        },
        {
            number: "3",
            heading: "Results for Round 1 (Idea Submission Round)",
            text: "Shortlisted teams will be notified via email & our social media platforms by 20 Feb 2026 ."
        },
        {
            number: "4",
            heading: "Offline Round on Campus",
            text: (
                <>
                    <b>Date- 28 Feb 09:00 AM Onwards</b><br />
                    Ideas will be evaluated based on creativity, feasibility, and impact.
                </>
            )
        },
        {
            number: "5",
            heading: "Results and Prize Distribution",
            text: (
                <>
                    <b>Date- 28 Feb 09:00 PM Onwards</b><br />

                </>
            )
        },

    ];

    return (
        <div className="min-h-screen bg-[#060010] flex justify-center py-16 px-4 lg:px-30">
            <div className="w-full">

                {/* Smaller title */}
                <h1
                    className="text-center text-4xl md:text-5xl font-black tracking-widest mb-14 
                               bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
                    style={{ fontFamily: "nexa, sans-serif" }}
                >
                    TIMELINE
                </h1>

                <div className="relative">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-16 pb-12 last:pb-0">

                            {/* Vertical line (smaller) */}
                            {index !== timelineData.length - 1 && (
                                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#B19EEF] to-transparent"></div>
                            )}

                            {/* Number Circle (smaller) */}
                            <div className="absolute left-0 top-0 w-12 h-12 rounded-full 
                                            bg-gradient-to-br from-[#B19EEF] to-[#9F7EE8]
                                            flex items-center justify-center 
                                            text-xl font-bold text-white 
                                            shadow-lg shadow-purple-500/30">
                                {item.number}
                            </div>

                            {/* Content card (smaller padding and font) */}
                            <div className="bg-gradient-to-br from-[#1a0f2e] to-[#0f0820] 
                                            border border-[#B19EEF]/20 
                                            rounded-lg p-4 
                                            hover:border-[#B19EEF]/50 
                                            transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">

                                <h3 className="text-xl font-bold text-[#B19EEF] mb-2">
                                    {item.heading}
                                </h3>

                                <div className="text-gray-300 text-sm leading-relaxed">
                                    {item.text}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
