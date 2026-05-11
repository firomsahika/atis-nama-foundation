import React from "react";

export const DonateImpact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
      <div className="p-6 rounded-2xl bg-white  shadow-lg">
        <h3 className="text-2xl font-bold text-teal-700">500+</h3>
        <p className="text-gray-600 mt-2">Lives Supported</p>
      </div>

      <div className="p-6 rounded-2xl bg-white  shadow-lg">
        <h3 className="text-2xl font-bold text-indigo-700">120+</h3>
        <p className="text-gray-600 mt-2">Children Educated</p>
      </div>

      <div className="p-6 rounded-2xl bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-amber-600">80+</h3>
        <p className="text-gray-600 mt-2">Elders Cared For</p>
      </div>
    </div>
  );
};
