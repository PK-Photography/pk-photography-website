"use client";

import React from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function LoginPromptModal({ isOpen, onClose }) {
  const router = useRouter();

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0">
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-10">
          <Dialog.Title className="text-xl font-semibold text-gray-800 mb-2">
            Welcome to PK Photography!
          </Dialog.Title>
          <p className="text-gray-600 mb-6">
            Please log in to access your dashboard and booking history.
          </p>

          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded-md"
              onClick={() => {
                localStorage.setItem("loginPromptDismissedAt", Date.now().toString());
                onClose();
              }}
            >
              Maybe Later
            </button>
            <button
              className="px-4 py-2 text-sm bg-black text-white hover:bg-gray-900 rounded-md"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}