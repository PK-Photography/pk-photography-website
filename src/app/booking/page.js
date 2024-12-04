



// "use client";
// import Header from "@/components/header/Header";
// import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// import PKLogo from "@/assets/logo.webp";

// // import { to } from './../../../.next/static/chunks/main-app';

// const MultiStepForm = () => {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         service: "",
//         message: "",
//         date: "",
//         time: "",
//     });

//     const [errors, setErrors] = useState({});

//     const validateStep = () => {
//         let stepErrors = {};
//         if (step === 1) {
//             if (!formData.name.trim()) stepErrors.name = "Name is required";
//             if (!formData.phone.trim()) stepErrors.phone = "Phone number is required";
//         }
//         if (step === 2) {
//             if (!formData.service) stepErrors.service = "Please select a service";
//         }
//         if (step === 3) {
//             if (!formData.date) stepErrors.date = "Please choose a date";
//         }
//         setErrors(stepErrors);
//         return Object.keys(stepErrors).length === 0;
//     };

//     const handleNext = () => {
//         if (validateStep()) setStep((prev) => prev + 1);
//     };

//     const handlePrevious = () => setStep((prev) => prev - 1);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//     };

//     return (
//         <>
//             <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />
//             <Header />

//             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//                 <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
//                     {/* Progress Bar */}
//                     <div className="flex items-center justify-between w-full mb-6">
//                         {[1, 2, 3, 4].map((s, index) => (
//                             <div key={s} className="relative flex flex-col items-center">
//                                 <div
//                                     className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${s <= step ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
//                                         }`}
//                                 >
//                                     {s}
//                                 </div>
//                                 <span
//                                     className={`mt-2 text-sm ${s === step ? "text-blue-500 font-medium" : "text-gray-600"
//                                         }`}
//                                 >
//                                     {["User Info", "Service", "Date & Time", "Success"][s - 1]}
//                                 </span>
//                                 {index < 3 && (
//                                     <div
//                                         className={`absolute top-5 left-12 w-16 h-1 ${s < step ? "bg-blue-500" : "bg-gray-200"
//                                             }`}
//                                     />
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Step Content */}
//                     {step === 1 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Your Information</h2>
//                             <p className="mb-5 text-gray-500">Please provide required information, We assure that we will not share any of your information to anyone.</p>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Name (Required)"
//                                 className={`w-full mb-3 border ${errors.name ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-400" : "focus:ring-blue-400"
//                                     }`}
//                             />
//                             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Email (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="Phone (Required)"
//                                 className={`w-full mb-3 border ${errors.phone ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-400" : "focus:ring-blue-400"
//                                     }`}
//                             />
//                             {errors.phone && (
//                                 <p className="text-red-500 text-sm">{errors.phone}</p>
//                             )}
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 placeholder="Address (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <div className="mt-4 flex justify-end">
//                                 <button
//                                     onClick={handleNext}
//                                     className="bg-black text-white px-4 py-2 rounded-md"
//                                 >
//                                     Continue →
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {step === 2 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Choose a Service</h2>
//                             <p className="mb-5 text-gray-500">Please  Choose the services which you want to book!</p>

//                             <select
//                                 name="service"
//                                 value={formData.service}
//                                 onChange={handleChange}
//                                 className={`w-full mb-3 border ${errors.service ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.service ? "focus:ring-red-400" : "focus:ring-blue-400"
//                                     }`}
//                             >
//                                 <option value="">Select a Service</option>
//                                 <option value="consulting">Headshots</option>
//                                 <option value="development">Portrait</option>
//                                 <option value="design">Wedding & Events</option>
//                                 <option value="design">Interior</option>
//                             </select>
//                             {errors.service && (
//                                 <p className="text-red-500 text-sm">{errors.service}</p>
//                             )}
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 placeholder="Message (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <div className="mt-4 flex justify-between">
//                                 <button
//                                     onClick={handlePrevious}
//                                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                                 >
//                                     ← Back
//                                 </button>
//                                 <button
//                                     onClick={handleNext}
//                                     className="bg-black text-white px-4 py-2 rounded-md"
//                                 >
//                                     Continue →
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {step === 3 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Choose Date & Time</h2>
//                             <p className="mb-5 text-gray-500">Please Choose the date and time!</p>

//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={formData.date}
//                                 onChange={handleChange}
//                                 className={`w-full mb-3 border ${errors.date ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md focus:outline-none focus:ring-2 ${errors.date ? "focus:ring-red-400" : "focus:ring-blue-400"
//                                     }`}
//                             />
//                             {errors.date && (
//                                 <p className="text-red-500 text-sm">{errors.date}</p>
//                             )}
//                             <input
//                                 type="time"
//                                 name="time"
//                                 value={formData.time}
//                                 onChange={handleChange}
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <div className="mt-4 flex justify-between">
//                                 <button
//                                     onClick={handlePrevious}
//                                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                                 >
//                                     ← Back
//                                 </button>
//                                 <button
//                                     onClick={handleNext}
//                                     className="bg-black text-white px-4 py-2 rounded-md"
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {step === 4 && (
//                         <div className="flex flex-col items-center justify-center p-10">
//                             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
//                                 <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                                 <h2 className="text-2xl font-semibold text-green-600">
//                                     Booking Successful!
//                                 </h2>
//                                 <p className="text-gray-600 mt-2">
//                                     We have received your booking request. Thank you!
//                                 </p>
//                             </div>
//                             <Link href="/">

//                                 <ButtonWrapper>Explore More</ButtonWrapper>
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </div>

//         </>
//     );
// };

// export default MultiStepForm;










// "use client";
// import Header from "@/components/header/Header";
// import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import axios from "axios";

// import PKLogo from "@/assets/logo.webp";

// const API_URL = "http://localhost:8081/api/booking/request";

// const MultiStepForm = () => {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         service: "",
//         message: "",
//         date: "",
//         time: "",
//     });

//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const validateStep = () => {
//         let stepErrors = {};
//         if (step === 1) {
//             if (!formData.name.trim()) stepErrors.name = "Name is required";
//             if (!formData.phone.trim()) stepErrors.phone = "Phone number is required";
//         }
//         if (step === 2) {
//             if (!formData.service) stepErrors.service = "Please select a service";
//         }
//         if (step === 3) {
//             if (!formData.date) stepErrors.date = "Please choose a date";
//         }
//         setErrors(stepErrors);
//         return Object.keys(stepErrors).length === 0;
//     };

//     const handleNext = () => {
//         if (validateStep()) setStep((prev) => prev + 1);
//     };

//     const handlePrevious = () => setStep((prev) => prev - 1);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//     };




//     const handleSubmit = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post(API_URL, formData, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (response.status === 200) {
//                 setSuccess(true);
//                 setStep(4); // Navigate to the success step
//             } else {
//                 setErrors({
//                     api: response.data.message || "Failed to create booking. Please try again.",
//                 });
//             }
//         } catch (error) {
//             setErrors({
//                 api:
//                     error.response?.data?.message ||
//                     "An error occurred. Please try again later.",
//             });
//         } finally {
//             setLoading(false);
//         }
//     };



//     return (
//         <>
//             <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />
//             <Header />

//             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//                 <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
//                     {/* Progress Bar */}
//                     <div className="flex items-center justify-between w-full mb-6">
//                         {[1, 2, 3, 4].map((s, index) => (
//                             <div key={s} className="relative flex flex-col items-center">
//                                 <div
//                                     className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${s <= step ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
//                                         }`}
//                                 >
//                                     {s}
//                                 </div>
//                                 <span
//                                     className={`mt-2 text-sm ${s === step ? "text-blue-500 font-medium" : "text-gray-600"
//                                         }`}
//                                 >
//                                     {["User Info", "Service", "Date & Time", "Success"][s - 1]}
//                                 </span>
//                                 {index < 3 && (
//                                     <div
//                                         className={`absolute top-5 left-12 w-16 h-1 ${s < step ? "bg-blue-500" : "bg-gray-200"
//                                             }`}
//                                     />
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Step Content */}
//                     {step === 1 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Your Information</h2>
//                             <p className="mb-5 text-gray-500">
//                                 Please provide required information, We assure that we will not
//                                 share any of your information to anyone.
//                             </p>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Name (Required)"
//                                 className={`w-full mb-3 border ${errors.name ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md`}
//                             />
//                             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Email (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md"
//                             />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="Phone (Required)"
//                                 className={`w-full mb-3 border ${errors.phone ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md`}
//                             />
//                             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 placeholder="Address (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md"
//                             />
//                             <button
//                                 onClick={handleNext}
//                                 className="bg-black text-white px-4 py-2 rounded-md"
//                             >
//                                 Continue →
//                             </button>
//                         </div>
//                     )}

//                     {step === 2 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Choose a Service</h2>
//                             <p className="mb-5 text-gray-500">
//                                 Please choose the services which you want to book!
//                             </p>
//                             <select
//                                 name="service"
//                                 value={formData.service}
//                                 onChange={handleChange}
//                                 className={`w-full mb-3 border ${errors.service ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md`}
//                             >
//                                 <option value="">Select a Service</option>
//                                 <option value="consulting">Headshots</option>
//                                 <option value="development">Portrait</option>
//                                 <option value="design">Wedding & Events</option>
//                                 <option value="design">Interior</option>
//                             </select>
//                             {/* <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.service}
//                                 onChange={handleChange}
//                                 placeholder="Address (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md"
//                             /> */}
//                             {errors.service && (
//                                 <p className="text-red-500 text-sm">{errors.service}</p>
//                             )}
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 placeholder="Message (Optional)"
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md"
//                             />
//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={handlePrevious}
//                                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                                 >
//                                     ← Back
//                                 </button>
//                                 <button
//                                     onClick={handleNext}
//                                     className="bg-black text-white px-4 py-2 rounded-md"
//                                 >
//                                     Continue →
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {step === 3 && (
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">Choose Date & Time</h2>
//                             <p className="mb-5 text-gray-500">Please choose the date and time!</p>
//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={formData.date}
//                                 onChange={handleChange}
//                                 className={`w-full mb-3 border ${errors.date ? "border-red-500" : "border-gray-300"
//                                     } p-2 rounded-md`}
//                             />
//                             {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
//                             <input
//                                 type="time"
//                                 name="time"
//                                 value={formData.time}
//                                 onChange={handleChange}
//                                 className="w-full mb-3 border border-gray-300 p-2 rounded-md"
//                             />
//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={handlePrevious}
//                                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//                                 >
//                                     ← Back
//                                 </button>
//                                 <button
//                                     onClick={handleSubmit}
//                                     className="bg-black text-white px-4 py-2 rounded-md"
//                                     disabled={loading}
//                                 >
//                                     {loading ? "Booking..." : "Book Now"}
//                                 </button>
//                             </div>
//                             {errors.api && (
//                                 <p className="text-red-500 text-sm mt-2">{errors.api}</p>
//                             )}
//                         </div>
//                     )}

//                     {step === 4 && (
//                         <div className="flex flex-col items-center justify-center p-10">
//                             <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
//                             <h2 className="text-2xl font-semibold text-green-600">
//                                 Booking Successful!
//                             </h2>
//                             <p className="mt-2 text-gray-500">
//                                 Thank you for booking with us. We will contact you soon!
//                             </p>
//                             <Link href="/" className="mt-5 text-blue-500 hover:underline">
//                                 Go to Homepage
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MultiStepForm;


"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";
import Image from "next/image";
import Header from "@/components/header/Header";
import PKLogo from "@/assets/logo.webp";

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

    // State to manage submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        try {
            // Send POST request to the API
            const response = await axios.post(
                "http://localhost:8081/api/booking/request",
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
        } catch (error) {
            console.error("Error submitting form:", error.message);
        }
    };

    // Success message UI
    if (isSubmitted) {
        return (
            <>
                <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="p-2" />

                <Header />
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
                        Please provide required information, We assure that we will not
                        share any of your information to anyone.
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
                                required
                            />
                        </div>

                        {/* Service */}
                        <div className="form-group col-span-2 md:col-span-1">
                            <label htmlFor="service" className="block text-sm font-medium">
                                Service
                            </label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                required
                            />
                            {/* <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full mb-3 border border-gray-300 p-2 rounded-md"
                                required
                            >
                                <option value="">Select a Service</option>
                                <option value="Headshots">Headshots</option>
                                <option value="Portrait">Portrait</option>
                                <option value="Wedding & Events">Wedding & Events</option>
                                <option value="Interior">Interior</option>
                            </select> */}

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
                                required
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
                                required
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
                                required
                            />
                        </div>


                        <div className="form-group col-span-2">
                            <button
                                type="submit"
                                className="bg-gray-700 hover:bg-black  text-white py-2 px-4 rounded w-full"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingForm;



