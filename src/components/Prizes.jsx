import React from "react";

const prizes = [
  {
    id: 1,
    title: "First Prize",
    amount: "₹ 15,000",
    icon: "🥇",
    border: "border-yellow-400",
  },
  {
    id: 2,
    title: "Second Prize",
    amount: "₹ 10,000",
    icon: "🥈",
    border: "border-gray-300",
  },
  {
    id: 3,
    title: "Third Prize",
    amount: "₹ 5,000",
    icon: "🥉",
    border: "border-orange-400",
  },
];

const Prizes = () => {
  return (
    <section className="bg-[#02152E] text-[#CFFFE8] py-16 px-4">
      <h2 className="text-center text-3xl font-extrabold tracking-widest mb-10">
        PRIZES
      </h2>

      <div className="flex flex-col items-center gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className={`w-full max-w-xs border ${prize.border} rounded-2xl py-8 px-6 text-center bg-[#010A1D] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:bg-[#051933]`}
          >
            <div className="text-4xl mb-3">{prize.icon}</div>
            <p className="text-lg font-semibold mb-2">{prize.title}</p>
            <p className="text-3xl font-extrabold">{prize.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
