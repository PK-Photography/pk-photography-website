"use client";
import React from "react";

const Modal = ({ title, open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-xl">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;