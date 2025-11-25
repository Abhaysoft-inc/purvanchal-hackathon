import React from "react";

const prizes = [
  {
    id: 1,
    title: "First Prize",
    amount: "₹ 15,000",
    icon: "🥇",
    border: "border-yellow-400",
    glow: "hover:shadow-yellow-400/50",
  },
  {
    id: 2,
    title: "Second Prize",
    amount: "₹ 10,000",
    icon: "🥈",
    border: "border-gray-300",
    glow: "hover:shadow-gray-300/50",
  },
  {
    id: 3,
    title: "Third Prize",
    amount: "₹ 5,000",
    icon: "🥉",
    border: "border-orange-400",
    glow: "hover:shadow-orange-400/50",
  },
];

const Prizes = () => {
  return (
    <section className="bg-[#060010] text-[white] py-16 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-widest mb-12 md:mb-16" style={{ fontFamily: 'nexa, sans-serif' }}>
        PRIZES
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-8 max-w-5xl mx-auto">
        {prizes.map((prize, index) => (
          <div
            key={prize.id}
            className={`w-full max-w-xs md:max-w-none md:flex-1 border-2 ${prize.border} rounded-2xl py-10 px-6 text-center bg-linear-to-br from-[#010A1D] to-[#020515] shadow-xl transition-all duration-300 hover:scale-105 ${prize.glow} hover:shadow-2xl hover:bg-linear-to-br hover:from-[#051933] hover:to-[#010A1D] ${index === 0 ? 'md:transform md:-translate-y-2' : ''}`}
          >
            <div className="text-5xl md:text-6xl mb-4">{prize.icon}</div>
            <p className="text-xl md:text-2xl font-bold mb-3 tracking-wide">{prize.title}</p>
            <p className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-[#CFFFE8] to-white bg-clip-text text-transparent">
              {prize.amount}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;