
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosConfig";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
    date: "",
    time: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/booking/request", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        toast.success("Booked Successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error("Failed to submit the booking form. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-10 min-h-[100vh]">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-600">
            Booking Successful!
          </h2>
          <p className="text-gray-600 mt-2">
            We have received your booking request. Thank you!
          </p>
        </div>
        <Link href="/">
          <ButtonWrapper>Explore More</ButtonWrapper>
        </Link>
      </div>
    );
  }

  const Label = ({ htmlFor, children, required }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium">
      {children}{" "}
      {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Your Information
        </h2>
        <p className="mb-5 text-gray-500">
          Please provide required information. We assure that we will not share
          any of your information with anyone.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="name" required>Name</Label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="email" required>Email</Label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Phone */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="phone" required>Phone</Label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Address */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="address" required>Address</Label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Service */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="service" required>Service</Label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select a Service</option>
              <option value="Headshots">Headshots</option>
              <option value="Portrait">Portrait</option>
              <option value="Wedding & Events">Wedding & Events</option>
              <option value="Interior">Interior</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="date" required>Date</Label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* Time (optional) */}
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="time">Time</Label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <Label htmlFor="message" required>Message</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-black text-white py-2 px-4 rounded w-full"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
