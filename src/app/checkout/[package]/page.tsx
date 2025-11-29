"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/utils/axiosConfig";
import { toast } from "react-toastify";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const packages = [
  {
    slug: "premium-package",
    title: "PREMIUM PACKAGE",
    price: "PRICE: 20,000 INR",
    images: ["/pricing/cover.jpg", "/pricing/PKP_2826.jpg", "/pricing/PKP_7172.jpg"],
    shootType: "FULL PORTFOLIO SHOOT",
    duration: "Duration: 5 To 6 Hours",
    looks: "Looks: 5 Different Looks",
    inclusions: "Inclusions: Studio, Shooting, Editing, And Hair & Makeup Artist Costs",
    deliverables: "Deliverables: 20 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
  {
    slug: "standard-package",
    title: "STANDARD PACKAGE",
    price: "PRICE: 15,000 INR",
    images: ["/pricing/0N3A7946.jpg", "/pricing/PKP_7916l.jpg", "/pricing/PKP_8780pl.jpg"],
    shootType: "MINI PORTFOLIO SHOOT",
    duration: "Duration: 3 To 4 Hours",
    looks: "Looks: 3 Different Looks",
    inclusions: "Inclusions: Studio, Shooting, Editing, And Hair & Makeup Artist Costs",
    deliverables: "Deliverables: 15 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
  {
    slug: "starter-package",
    title: "STARTER PACKAGE",
    price: "PRICE: 5,000 INR",
    images: ["/pricing/5S1A9900 cover.jpg", "/pricing/Anushka 4.jpg", "/pricing/PKP_0763 cover.jpg", "/pricing/PKP_551.jpg"],
    shootType: "ONE-HOUR PORTRAIT SESSION",
    duration: "Duration: 1 Hour",
    details: "Details: Unlimited Dress Changes Within The Time Frame",
    inclusions: "Inclusions: Shooting And Editing Costs (Hair & Makeup Artist Not Included)",
    deliverables: "Deliverables: 5 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
];

export default function CheckoutPage() {
  const params = useParams() as { package: string };
  const slug = params.package;

  const selectedPackage = packages.find((pkg) => pkg.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "Portrait",
    message: "",
    date: "",
    time: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (!selectedPackage) {
      toast.error("No package selected.");
      setIsLoading(false);
      return;
    }
  
    try {
      await axiosInstance.post("/booking/request", formData);
  
      // const amount = selectedPackage.price.match(/\d+/g)?.join(""); // "20000"
      // const paymentRes = await axiosInstance.post("/phonepe/initiate", {
      //   amount: Number(amount) * 100, // in paise
      //   name: formData.name,
      //   phone: formData.phone,
      // });
  
      // if (paymentRes.data.redirectUrl) {
      //   window.location.href = paymentRes.data.redirectUrl;
      // } else {
      //   throw new Error("No redirect URL from PhonePe");
      // }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong during booking or payment.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Package not found.
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-10 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-600">Booking Successful!</h2>
          <p className="text-gray-600 mt-2">We have received your booking request. Thank you!</p>
        </div>
        <Link href="/">
          <button className="mt-6 bg-black text-white py-2 px-4 rounded">Explore More</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Package Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedPackage.title}</h2>
          <div className="w-full h-64 relative rounded-lg overflow-hidden mb-6">
            <Image
              src={selectedPackage.images[0]}
              alt={selectedPackage.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[#2874A6] font-semibold text-lg mb-4">{selectedPackage.price}</p>
          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li><strong>Shoot Type:</strong> {selectedPackage.shootType}</li>
            <li><strong>Duration:</strong> {selectedPackage.duration}</li>
            {selectedPackage.looks && <li><strong>Looks:</strong> {selectedPackage.looks}</li>}
            {selectedPackage.details && <li><strong>Details:</strong> {selectedPackage.details}</li>}
            <li><strong>Inclusions:</strong> {selectedPackage.inclusions}</li>
            <li><strong>Deliverables:</strong> {selectedPackage.deliverables}</li>
          </ul>
          <p className="text-xs italic text-gray-500 mt-4">{selectedPackage.note}</p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone", "address"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required={["name", "email", "phone"].includes(field)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2874A6]"
              />
            ))}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows={4}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2874A6] text-white py-3 rounded-md hover:bg-[#1b4b7a] transition duration-200"
            >
              {isLoading ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}