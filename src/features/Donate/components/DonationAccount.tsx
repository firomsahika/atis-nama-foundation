"use client";

import { Copy, HeartHandshake, Landmark } from "lucide-react";

const accounts = [
  {
    bank: "Commercial Bank of Ethiopia (CBE)",
    accountName: "ATIS NAMA FOUNDATION",
    accountNumber: "1000 0000 0000",
    color: "from-cyan-500 to-blue-600",
  },
  {
    bank: "Cooperative Bank of Oromia (CBO)",
    accountName: "ATIS NAMA FOUNDATION",
    accountNumber: "2000 0000 0000",
    color: "from-emerald-500 to-teal-600",
  },
  {
    bank: "Awash Bank",
    accountName: "ATIS NAMA FOUNDATION",
    accountNumber: "3000 0000 0000",
    color: "from-indigo-500 to-purple-600",
  },
];

export const DonationAccounts = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="relative overflow-hidden  py-24">
      {/* soft background glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full  blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full  blur-3xl" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2">
            <HeartHandshake size={16} className="text-cyan-600" />

            <span className="text-sm font-medium tracking-wide text-cyan-700">
              Support The Foundation
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
            Donate & Make
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              Real Impact
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Your contribution helps us provide shelter, care, food, education,
            and emotional support for elders and children in need.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-[30px]
                border border-gray-200 bg-white p-7
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* top gradient line */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${account.color}`}
              />

              {/* glow */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${account.color} opacity-10 blur-3xl`}
              />

              {/* icon */}
              <div
                className={`
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl bg-gradient-to-br ${account.color}
                  shadow-lg
                `}
              >
                <Landmark className="text-white" size={28} />
              </div>

              {/* content */}
              <div className="mt-7">
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {account.bank}
                </h3>

                <div className="mt-6 space-y-5">
                  {/* account name */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Account Name
                    </p>

                    <p className="mt-2 text-base font-semibold text-gray-800">
                      {account.accountName}
                    </p>
                  </div>

                  {/* account number */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Account Number
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
                      <span className="text-lg font-bold tracking-wider text-gray-900">
                        {account.accountNumber}
                      </span>

                      <button
                        onClick={() => handleCopy(account.accountNumber)}
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl bg-white text-gray-600
                          shadow-sm transition-all duration-300
                          hover:bg-cyan-50 hover:text-cyan-600
                        "
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom text */}
              <p className="mt-8 text-sm leading-relaxed text-gray-500">
                Thank you for supporting ATIS NAMA FOUNDATION and helping us
                transform lives through compassion and community care.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
