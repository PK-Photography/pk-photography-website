



"use client";
import Header from "@/components/header/Header";
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import PKLogo from "@/assets/logo.webp";

// import { to } from './../../../.next/static/chunks/main-app';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
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

    const [errors, setErrors] = useState({});

    const validateStep = () => {
        let stepErrors = {};
        if (step === 1) {
            if (!formData.name.trim()) stepErrors.name = "Name is required";
            if (!formData.phone.trim()) stepErrors.phone = "Phone number is required";
        }
        if (step === 2) {
            if (!formData.service) stepErrors.service = "Please select a service";
        }
        if (step === 3) {
            if (!formData.date) stepErrors.date = "Please choose a date";
        }
        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) setStep((prev) => prev + 1);
    };

    const handlePrevious = () => setStep((prev) => prev - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    return (
        <>
            <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />
            <Header />

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                    {/* Progress Bar */}
                    <div className="flex items-center justify-between w-full mb-6">
                        {[1, 2, 3, 4].map((s, index) => (
                            <div key={s} className="relative flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${s <= step ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {s}
                                </div>
                                <span
                                    className={`mt-2 text-sm ${s === step ? "text-blue-500 font-medium" : "text-gray-600"
                                        }`}
                                >
                                    {["User Info", "Service", "Date & Time", "Success"][s - 1]}
                                </span>
                                {index < 3 && (
                                    <div
                                        className={`absolute top-5 left-12 w-16 h-1 ${s < step ? "bg-blue-500" : "bg-gray-200"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Your Information</h2>
                            <p className="mb-5 text-gray-500">Please provide required information, We assure that we will not share any of your information to anyone.</p>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name (Required)"
                                className={`w-full mb-3 border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (Optional)"
                                className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone (Required)"
                                className={`w-full mb-3 border ${errors.phone ? "border-red-500" : "border-gray-300"
                                    } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone}</p>
                            )}
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address (Optional)"
                                className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={handleNext}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Choose a Service</h2>
                            <p className="mb-5 text-gray-500">Please  Choose the services which you want to book!</p>

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full mb-3 border ${errors.service ? "border-red-500" : "border-gray-300"
                                    } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.service ? "focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            >
                                <option value="">Select a Service</option>
                                <option value="consulting">Headshots</option>
                                <option value="development">Portrait</option>
                                <option value="design">Wedding & Events</option>
                                <option value="design">Interior</option>
                            </select>
                            {errors.service && (
                                <p className="text-red-500 text-sm">{errors.service}</p>
                            )}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message (Optional)"
                                className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={handlePrevious}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Choose Date & Time</h2>
                            <p className="mb-5 text-gray-500">Please Choose the date and time!</p>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={`w-full mb-3 border ${errors.date ? "border-red-500" : "border-gray-300"
                                    } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.date ? "focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            />
                            {errors.date && (
                                <p className="text-red-500 text-sm">{errors.date}</p>
                            )}
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={handlePrevious}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="flex flex-col items-center justify-center p-10">
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
                    )}
                </div>
            </div>

        </>
    );
};

export default MultiStepForm;
