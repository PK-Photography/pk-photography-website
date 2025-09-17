"use client";

import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";

const TalentsPage = () => {
  const [search, setSearch] = useState("");
  const [talents, setTalents] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    city: "",
    talent: "",
    experience: "",
    portfolioUrl: "",
    message: "",
    image: null,
  });
  const router = useRouter();

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await axiosInstance.get(`/talents/approved`, {
          params: { search },
        });
        if (response.status === 200) {
          setTalents(response.data);
        }
      } catch (error) {
        console.error("Error fetching Talents:", error);
      }
    };
    fetchTalents();
  }, [search]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) submitData.append(key, value as any);
      });
      submitData.append("approved", "false");

      await axiosInstance.post("/talents", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsFormOpen(false);
      alert("Talent submitted successfully!");
    } catch (err) {
      console.error("Error submitting talent:", err);
      alert("Failed to submit talent");
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div className="w-full">
        <img
          src="/live-streaming/executive_portraits.jpg"
          alt="Talents Banner"
          className="w-full h-[320px] sm:h-[560px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Meet Our Talents
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore top models and performers ready to elevate your brand
            </p>
          </div>

          {/* Search + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div className="relative w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Search talents"
                value={search}
                onChange={(e) => setSearch(e.target.value.trim())}
                className="w-full py-3 px-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <FiSearch className="absolute left-4 top-3.5 text-gray-500" />
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition whitespace-nowrap"
            >
              Join as a Talent
            </button>
          </div>

          {/* Talent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {talents.map((talent) => (
              <div
                key={talent._id}
                className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={talent.imageUrl}
                  alt={talent.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {talent.name}
                    </h3>
                    <p className="text-sm text-gray-600">{talent.city}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {talent.talent}
                    </p>
                  </div>
                  <div className="flex mt-4 gap-2">
                    <button
                      onClick={() => {
                        setSelectedTalent(talent);
                        setIsDetailsOpen(true);
                      }}
                      className="flex-1 border border-black px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => router.push("/booking")}
                      className="flex-1 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                    >
                      Reach Out
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Form Modal */}
      <Dialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-bold">
                Join as Talent
              </Dialog.Title>
              <XMarkIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsFormOpen(false)}
              />
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {["name", "email", "phone", "city", "talent", "experience"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    required={[
                      "name",
                      "email",
                      "phone",
                      "city",
                      "talent",
                    ].includes(field)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded-md"
                  />
                )
              )}
              <input
                type="url"
                placeholder="Portfolio URL"
                value={formData.portfolioUrl}
                onChange={(e) =>
                  setFormData({ ...formData, portfolioUrl: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files?.[0] })
                }
                className="w-full"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Details Modal */}
      <Dialog
        open={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-bold">
                {selectedTalent?.name}
              </Dialog.Title>
              <XMarkIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsDetailsOpen(false)}
              />
            </div>
            {selectedTalent && (
              <div>
                <img
                  src={selectedTalent.imageUrl}
                  alt={selectedTalent.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-700 mb-1">
                  <b>City:</b> {selectedTalent.city}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <b>Talent:</b> {selectedTalent.talent}
                </p>
                {selectedTalent.experience && (
                  <p className="text-sm text-gray-700 mb-1">
                    <b>Experience:</b> {selectedTalent.experience}
                  </p>
                )}
                {selectedTalent.portfolioUrl && (
                  <p className="text-sm text-gray-600 mb-2">
                    <b>Portfolio: </b>
                    <a
                      href={selectedTalent.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </a>
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  <b>Message:</b> {selectedTalent.message}
                </p>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default TalentsPage;
