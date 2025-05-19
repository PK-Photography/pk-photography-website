"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission logic
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-10 min-h-[100vh]">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-600">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mt-2">
            Thank you for applying. We’ll be in touch soon.
          </p>
        </div>
        <Link href="/">
          <ButtonWrapper>Go Home</ButtonWrapper>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Role</h2>
        <p className="mb-5 text-gray-500 text-sm text-center">
          We’re excited to hear from you. Upload your resume and let’s talk.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black file:text-white hover:file:bg-gray-800"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gray-700 hover:bg-black text-white py-2 px-4 rounded w-full"
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareersPage;
