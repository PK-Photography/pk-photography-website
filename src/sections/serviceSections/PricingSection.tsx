import React from "react";

type PricingPlan = {
    title: string;
    price: string;
    duration: string;
    looks: string;
    editedImages: string;
    retouching: string;
};

const pricingPlans: PricingPlan[] = [
    {
        title: "Standard",
        price: "₹12,000",
        duration: "2-3 HOURS",
        looks: "2",
        editedImages: "15",
        retouching: "Basic : Retouching",
    },
    {
        title: "Premium",
        price: "₹18,000",
        duration: "3-4 HOURS",
        looks: "4",
        editedImages: "20",
        retouching: "High End : Retouching",
    },
    {
        title: "Exclusive",
        price: "₹25,000",
        duration: "4-5 HOURS",
        looks: "5-6",
        editedImages: "25",
        retouching: "Basic / High End : Retouching",
    },
];

const PricingSection: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#0E7257] text-white p-8  shadow-lg relative h-[450px] flex flex-col items-center justify-between"
                    >
                        {/* Duration Badge */}
                        <span className="absolute top-4 right-4 bg-[#054630] text-white text-xs px-3 py-1 rounded-full">
                            {plan.duration}
                        </span>

                        {/* Plan Title */}
                        <h2 className="text-lg font-semibold">{plan.title}</h2>

                        {/* Price */}
                        <p className="text-5xl font-bold mt-2">{plan.price}</p>

                        {/* Features */}
                        <ul className="mt-4 text-sm text-center space-y-2 font-semibold">
                            <li>• Looks/Changes: {plan.looks}</li>
                            <li>• Edited Images: {plan.editedImages}</li>
                            <li>• {plan.retouching}</li>
                        </ul>

                        {/* Dropdowns */}
                        <div className="mt-4 space-y-1">
                            <p className="cursor-pointer">▼ Inclusions</p>
                            <p className="cursor-pointer">▼ Additional Options</p>
                        </div>

                        {/* Book Now Button */}
                        <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
                            BOOK NOW
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;
