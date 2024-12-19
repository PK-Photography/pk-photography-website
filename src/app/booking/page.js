
"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
import Image from "next/image";
import Header from "@/components/header/Header";
import PKLogo from "@/assets/logo.webp";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosConfig";

const BookingForm = () => {
    // State to hold form data
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

    // State to manage submission and loading status
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true ); // Start loading
        

        try {
            // Send POST request to the API
            const response = await axiosInstance.post(
                "/booking/request",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201) {
                setIsSubmitted(true); // Show success message
            }
            toast.success("Booked Successfully!")
        } catch (error) {
            console.error("Error submitting form:", error.message);
            toast.error("Failed to submit the booking form. Please try again later!")
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    // Success message UI
    if (isSubmitted) {
        return (
            <>
                <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />

                <Header />
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
            </>
        );
    }

    // Booking form UI
    return (
        <>
            <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />

            <Header />

            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
                <div className="bg-white shadow-md rounded-md p-8 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Your Information</h2>
                    <p className="mb-5 text-gray-500">
                        Please provide required information. We assure that we will not
                        share any of your information with anyone.
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Form Fields */}
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
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

                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
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
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium">
                                Phone
                            </label>
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
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="address" className="block text-sm font-medium">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        {/* Service */}
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="service" className="block text-sm font-medium">
                                Service
                            </label>
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
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="date" className="block text-sm font-medium">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        {/* Time */}
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="time" className="block text-sm font-medium">
                                Time
                            </label>
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
                        <div className="form-group col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="form-group col-span-2">
                            <button
                                type="submit"
                                className="bg-gray-700 hover:bg-black text-white py-2 px-4 rounded w-full"
                                disabled={isLoading} // Disable the button while loading
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingForm;
