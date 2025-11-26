import React from "react";

const Rulebook = () => {
    const rules = [
        "Team Formation: Participants can form teams of 2 to 4 members.",
        "Group leader need to fill the online registration form and fill the details of all members.",
        "Registration fee is non refundable",
        "We encourage multidisciplinary participations",
        "Student can participate only in team",
        "At least one member must be present on the allocated area",
        "All work must be created during the hackathon.",
        "Teams have to present their solution in the form of a prototype",
        "Projects must align with the given hackathon themes or challenges.",
        "All projects must be submitted by the designated deadline, including project description, code, and Presentation",
        "Project Scope: Teams can work on any project within the given theme. The scope can be limited to a specific technology or platform based on the event's guidelines.",
        "Time Limit: The Hackathon will have a specific time limit.",
        "The use of pre-existing code or projects is not allowed, except for open-source libraries or frameworks.",
        "Code Ownership: All code developed during the Hackathon should be the original work of the team. Participants cannot use code or assets created by someone else without proper permissions or licenses.",
        "Collaboration: Teams are encouraged to collaborate and seek help from mentors or organizers, but cross-team collaboration is not allowed during the competition.",
        "Presentation: Each team will have to present their project to the judging panel. The presentation should demonstrate the functionality and features of the project, as well as any unique or innovative aspects.",
        "Judging Criteria: The judging criteria for the Hackathon will be clearly communicated to the participants before the event. The result by the judge will be final. It may include aspects such as innovation, technical implementation, user experience, scalability, and relevance to the theme.",
        "Fair Play: Participants must adhere to ethical standards and abide by the rules and regulations set by the organizers. Any form of cheating, plagiarism, or unfair practices will result in immediate disqualification.",
        "Intellectual Property: Participants retain full ownership of the intellectual property rights to their projects. However, organizers may request participants to share their code or project details for promotional or showcase purposes.",
        "Code Submission: Teams must submit their code and project documentation before the specified deadline. Late submissions may result in penalties or disqualification.",
        "Code Validation: Organizers may conduct code validation to ensure that the project was developed within the given time frame and complies with the rules and regulations.",
        "Code Sharing: Participants are encouraged to share their code and projects with the wider community after the Hackathon. Open sourcing or publishing the code on platforms like GitHub is often appreciated.",
        "Code of Conduct: Participants should adhere to a code of conduct that promotes inclusivity, respect, and professionalism. Any form of harassment, discrimination, or inappropriate behaviour will not be tolerated.",
        "Prizes and Awards: The Hackathon will offer prizes or awards to winning teams based on the judging criteria.",
        "Disputes and Arbitration: In case of any disputes or concerns, the decision of the organizers and judging panel will be final. Any disagreements or issues should be resolved through an arbitration process outlined by the organizers.",
        "Liability: The organizers and sponsors of the Hackathon hold no liability for any damages, losses, or injuries incurred during the event. Participants are responsible for their own safety, equipment, and actions.",
        "Changes to the Rules: Organizers reserve the right to make changes to the Hackathon rules, format, or prizes at any time. Any modifications will be communicated to the participants in a clear and timely manner.",
        "There will be no TA/DA for the participants to attend hackathon.",
    ];

    return (
        <div className="min-h-screen bg-[#060010] text-[#B19EEF] flex flex-col items-center px-4 py-12">
            <h2 className="text-3xl font-bold text-[white] mb-10 md:text-5xl lg:text-6xl">
                Hackathon Rules
            </h2>

            <div className="w-full max-w-4xl h-[500px] overflow-y-scroll space-y-3 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#100a1a] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B19EEF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#9c7ee0]">
                {rules.map((rule, index) => (
                    <div
                        key={index}
                        className="bg-[#100a1a] rounded shadow-md px-6 py-4 transition-all duration-300 hover:bg-[#1a1225]"
                    >
                        <div className="flex gap-4">
                            <span className="text-[#B19EEF] font-bold flex-shrink-0">
                                {index + 1}.
                            </span>
                            <p className="text-[white] leading-relaxed">{rule}</p>
                        </div>
                    </div>
                ))}

                <div className="bg-[#100a1a] rounded shadow-md px-6 py-4 mt-6 border-2 border-[#B19EEF]">
                    <p className="text-[white] font-semibold">
                        <span className="text-[#B19EEF]">Note:</span> There will be three (First, Second and Third) prizes. Decision of the evaluation panel members based on the performance of the team will be final.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rulebook;
