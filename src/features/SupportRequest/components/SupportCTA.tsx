// components/support/SupportCTA.tsx

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export const SupportCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16 text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-teal-100 to-amber-100 rounded-2xl flex items-center justify-center mb-8">
            <Heart className="w-10 h-10 text-teal-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Every Request Makes a Difference
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Thank you for taking the time to help someone in need. Your mention
            helps us reach those who may otherwise be forgotten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support-request"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-teal-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Submit Another Request
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-2xl transition-all duration-300"
            >
              Return to Homepage
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            All requests are reviewed with care and confidentiality.
          </div>
        </div>
      </div>
    </section>
  );
};
