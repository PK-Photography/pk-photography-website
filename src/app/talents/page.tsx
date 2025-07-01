"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const sampleTalents = [
  {
    id: 1,
    name: "Tanya Mehra",
    location: "Mumbai",
    category: "Fashion Model",
    image: "/models/model1.jpg",
  },
  {
    id: 2,
    name: "Ritika Verma",
    location: "Delhi",
    category: "Bridal Model",
    image: "/models/model2.jpg",
  },
];

const TalentsPage = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
    {/* Banner Section - Full Width */}
    <div className="w-full">
      <img
        src="/live-streaming/executive_portraits.jpg"
        alt="Talents Banner"
        className="w-full h-[560px] object-cover"
      />
    </div>
    <div className="min-h-screen bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Meet Our Talents</h1>
          <p className="text-gray-600 text-sm">
            Explore top models and performers ready to elevate your brand
          </p>
        </div>

        {/* Search + Join CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search talents"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FiSearch className="absolute left-4 top-3.5 text-gray-500" />
          </div>
          <Link
            href="/signup"
            className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition whitespace-nowrap"
          >
            Join as a Talent
          </Link>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleTalents.map((talent) => (
            <div
              key={talent.id}
              className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between"
            >
              <img
                src={talent.image}
                alt={talent.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{talent.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    {talent.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {talent.category}
                  </p>
                </div>
                <div className="flex mt-4 gap-2">
                  <button className="flex-1 border border-black px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
                    View Details
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                  >
                    Reach Out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="fixed z-50 inset-0"
            >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-60" aria-hidden="true" />

            {/* Modal Content */}
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Panel className="relative bg-white rounded-lg shadow-2xl p-8 w-full max-w-md z-10">
                {/* Close Button */}
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <XMarkIcon className="h-6 w-6" />
                </button>

                {isSubmitted ? (
                    <div className="text-center mt-4">
                    <CheckCircleIcon className="w-14 h-14 text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Submitted Successfully</h3>
                    <p className="text-sm text-gray-600">We’ll get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleModalSubmit} className="space-y-4 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Reach Out</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <textarea
                        placeholder="Your Requirement"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
                    >
                        Submit
                    </button>
                    </form>
                )}
                </Dialog.Panel>
            </div>
            </Dialog>
      </div>
    </div>    
    </>
  );
};

export default TalentsPage;