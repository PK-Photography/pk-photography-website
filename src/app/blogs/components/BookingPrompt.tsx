import React from "react";

const BookingPrompt: React.FC = () => {
  return (
    <div className="mb-10">
      <h4 className="font-semibold text-lg mb-2">Want to book with us?</h4>
      <p className="text-sm text-gray-600">Tel: <a href="tel:+918888766739" className="hover:underline">+91 8888766739</a></p>
      <p className="text-sm text-gray-600">prabhakar@pkphotography.in</p>
    </div>
  );
};

export default BookingPrompt;