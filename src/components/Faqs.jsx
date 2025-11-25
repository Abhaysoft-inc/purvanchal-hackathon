import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Purvanchal Technical Hackathon?",
      answer:
        "It is a inter college hackathon hosted by Kamla Nehru Institute Of Technology,Sultanpur .Its final round will be held on 2nd December,2025 at KNIT,Sultanpur Campus.",
    },
    {
      question: "Who all are eligible to participate?",
      answer:
        "Any student pursuing a college degree can participate.",
    },
    {
      question: "It is my first hackathon, what's something I should know?",
      answer:
        "Don’t worry! Hackathons are about learning and teamwork. Bring your curiosity and enthusiasm,mentors and peers will guide you throughout.",
    },
    {
      question: "What is the Round 1? ",
      answer:
        "Round 1 is the PPT submission round where participants present their ideas to get shortlisted for the final round.",
    },
    {
      question: "Where and how do I submit my PPT for Round 1?",
      answer:
        "You can submit your PPT through the Unstop registration page till 29th November,2025.",
    },
    {
      question: "Where is it being held?",
      answer:
        " The first round will be hosted online on Unstop and the second or the final round will be hosted at the Kamla Nehru Institute Of Technology ,Sultanpur campus. Further details will be shared with shortlisted teams.",
    },
    {
      question: "Can we participate individually?",
      answer:
        "No, the team size should be 2-4 members to enhance learning and collaboration.",
    },
    {
      question: "Will there be food arrangements and accomadation?",
      answer:
        "Yes, meals and accomodation will be provided to all registered participants during the event with aminimal payment.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#060010] text-[#B19EEF] flex flex-col items-center px-4 py-12">
      <h2 className="text-4xl font-bold text-[#B19EEF] mb-10">FAQ's</h2>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" bg-[#100a1a] rounded-2xl shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-1 focus:outline-none"
            >
              <span className="text-lg font-medium text-[#B19EEF]">
                {faq.question}
              </span>
              <span className="text-[#B19EEF] text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-[#B19EEF]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
