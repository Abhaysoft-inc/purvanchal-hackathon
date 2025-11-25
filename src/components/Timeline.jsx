export default function Timeline() {
    const timelineData = [
        {
            number: "1",
            heading: "Registrations Open",
            text: (
                <>
                    <b>25th-30th November</b><br />
                    All Aboard! Save your spot at Purvanchal Express student-run hackathon By Google Developer Group.
                </>
            )
        },
        {
            number: "2",
            heading: "Registrations Close",
            text: (
                <>
                    <b>Last date - 29th November at 11:59 PM</b><br />
                    Gate Closes - Last chance to join the hacker caravan.
                </>
            )
        },
        {
            number: "3",
            heading: "Results for Round 1(Idea Submission Round)",
            text: "Shortlisted teams will be notified via email."
        },
        {
            number: "4",
            heading: "Offline Round 2",
            text: (
                <>
                    <b>Date- 2nd December</b><br />
                    IDEAS will be evaluated based on creativity, feasibility, and impact.
                </>
            )
        },
        {
            number: "5",
            heading: "Results for Round 2",
            text: "Winners will be announced and prize money will be distributed."
        }
    ];

    return (
        <div className="min-h-screen bg-[#060010] flex justify-center py-20">
            <div className="w-11/12 max-w-4xl">
                <h1 className="text-center text-6xl md:text-7xl font-black tracking-widest mb-20 bg-gradient-to-r from-[white] to-[white] bg-clip-text text-transparent" style={{ fontFamily: 'nexa, sans-serif' }}>
                    TIMELINE
                </h1>

                <div className="relative">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-20 pb-16 last:pb-0">
                            {/* Vertical line */}
                            {index !== timelineData.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#B19EEF] to-transparent"></div>
                            )}

                            {/* Number circle */}
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#B19EEF] to-[#9F7EE8] flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-purple-500/30">
                                {item.number}
                            </div>

                            {/* Content card */}
                            <div className="bg-gradient-to-br from-[#1a0f2e] to-[#0f0820] border border-[#B19EEF]/20 rounded-xl p-6 hover:border-[#B19EEF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                                <h3 className="text-2xl font-bold text-[#B19EEF] mb-3">
                                    {item.heading}
                                </h3>
                                <div className="text-gray-300 leading-relaxed">
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