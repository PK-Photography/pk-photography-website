"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosConfig";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function LoginPromptModal({ isOpen, onClose }) {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({ fullName: "", mobileNo: "" });
  const [mobileError, setMobileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const lastDismissed = parseInt(localStorage.getItem("loginPromptDismissedAt") || "0", 10);
    const fifteenMinutesAgo = Date.now() - 15 * 60 * 1000;
    const shouldShow = !session?.user && (!lastDismissed || lastDismissed < fifteenMinutesAgo);
    setShouldRender(shouldShow);
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateMobile = (number) => {
    const digits = number.replace(/\D/g, "");
    return digits.startsWith("91") ? digits.length === 12 : digits.length === 10;
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setMobileError("");

    if (!validateMobile(formData.mobileNo)) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        fullName: formData.fullName,
        mobileNo: formData.mobileNo,
        redirect: false,
      });

      if (res?.ok) {
        toast.success("Welcome!");
        localStorage.setItem("loginPromptDismissedAt", Date.now().toString());
        onClose();
        router.push("/");
      } else {
        toast.error("Login failed.");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 font-sans">
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="relative bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-10">
          {/* Close Button */}
          <button
            onClick={() => {
              localStorage.setItem("loginPromptDismissedAt", Date.now().toString());
              onClose();
            }}
            className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 8.586L15.293 3.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Dialog.Title className="text-xl font-semibold text-gray-900 text-center">
            Welcome to PK Photography
          </Dialog.Title>
          <p className="text-sm text-gray-600 text-center mb-4 mt-4">
            Log in to access your personalized dashboard, downloads, and booking history.
          </p>

          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <PhoneInput
                country={"in"}
                value={formData.mobileNo}
                onChange={(phone) => setFormData({ ...formData, mobileNo: phone })}
                inputStyle={{
                  width: "100%",
                  padding: "10px 10px 10px 50px",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
                containerStyle={{
                  position: "relative",
                  width: "100%",
                  fontFamily: "inherit",
                }}
                inputProps={{ name: "mobileNo", required: true }}
              />
              {mobileError && <p className="text-sm text-red-600 mt-1">{mobileError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-500">or continue with</div>

          <GoogleLoginButton />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}