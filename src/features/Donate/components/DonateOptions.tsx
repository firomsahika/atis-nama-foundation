import React from "react";

const options = [
  { amount: "$10", desc: "Feeds a child for a day" },
  { amount: "$25", desc: "Medical support for elders" },
  { amount: "$50", desc: "Shelter & care package" },
  { amount: "$100", desc: "Full monthly support" },
];

export const DonateOptions = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {options.map((opt, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition cursor-pointer text-center"
        >
          <h3 className="text-xl font-bold text-gray-900">{opt.amount}</h3>
          <p className="text-sm text-gray-600 mt-2">{opt.desc}</p>
        </div>
      ))}
    </div>
  );
};
