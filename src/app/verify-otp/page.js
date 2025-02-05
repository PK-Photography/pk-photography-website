"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosConfig";

export default function VerifyOtp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch email from localStorage (Set during signup)
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      toast.error("No email found! Redirecting to Signup.");
      router.push("/signup");
    }
    setEmail(storedEmail || "");
  }, [router]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) return toast.error("Please enter the OTP!");

    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/verify-otp", { email, otp });

      if (res.data.success) {
        toast.success("OTP Verified! Redirecting...");
        router.push("/"); // Redirect after successful verification
      } else {
        toast.error(res.data.message || "OTP verification failed.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/resend-otp", { email });

      if (res.data.success) {
        toast.success("OTP Resent! Please check your email.");
      } else {
        toast.error(res.data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Verify OTP</h2>
        
        <p className="text-center text-gray-600 text-sm">
          OTP has been sent to <span className="font-semibold text-indigo-600">{email}</span>
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-4 mt-4">
          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Enter OTP</label>
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 text-center tracking-widest text-lg" 
              required
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Resend OTP */}
        <button
          onClick={handleResendOtp}
          className="w-full mt-3 text-sm text-indigo-600 hover:underline"
          disabled={loading}
        >
          Resend OTP
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Wrong email? <a href="/signup" className="text-indigo-600 font-medium">Signup Again</a>
        </p>
      </div>
    </div>
  );
}
