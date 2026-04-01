// components/support/SupportRequestForm.tsx

"use client";

import React, { useState } from "react";
import { Heart, MapPin, Users, Calendar, User } from "lucide-react";

export const SupportRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    location: "",
    phone: "",
    supportType: "",
    description: "",
    submittedBy: "",
    relationship: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend later
    alert(
      "Thank you! Your support request has been received. We will contact you soon.",
    );
    // Reset form
    setFormData({
      fullName: "",
      age: "",
      gender: "",
      location: "",
      phone: "",
      supportType: "",
      description: "",
      submittedBy: "",
      relationship: "",
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tell Us About Someone Who Needs Help
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your information will be handled with care and confidentiality. Our
            team will review and reach out as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Person Needing Support */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-teal-600" />
                Person Needing Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Age"
                  />
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500"
                  placeholder="Kebele, Woreda, City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>
            </div>

            {/* Support Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type of Support Needed
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Housing",
                  "Food & Nutrition",
                  "Medical Care",
                  "Education",
                  "Emergency Aid",
                  "Other",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 cursor-pointer hover:border-teal-500 transition-colors"
                  >
                    <input
                      type="radio"
                      name="supportType"
                      value={type}
                      checked={formData.supportType === type}
                      onChange={handleChange}
                      className="w-5 h-5 text-teal-600 accent-teal-600"
                    />
                    <span className="font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information / Story
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-teal-500 resize-y"
                placeholder="Please describe the situation, family condition, and urgency..."
              />
            </div>

            {/* Submitted By */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name (Submitted By)
                </label>
                <input
                  type="text"
                  name="submittedBy"
                  value={formData.submittedBy}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to the person
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 bg-white"
                >
                  <option value="">Select relationship</option>
                  <option value="Neighbor">Neighbor</option>
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>
                  <option value="Community Leader">Community Leader</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 py-5 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.985]"
            >
              Submit Support Request
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              All information is kept confidential. Our team will contact you
              within 48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
