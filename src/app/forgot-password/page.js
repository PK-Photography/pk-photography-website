"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosConfig";
import Header from "@/components/header/Header";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/user/forgot-password", { email });
      
      console.log("Response Data:", res.data);
      
      if (res.data.success) {
        toast.success("OTP sent to your email. Please verify.");
        localStorage.setItem("userEmail", email); // Store email for OTP verification
        router.push("/verify-otp");
      } else {
        toast.error(res.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Forgot Password Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Forgot Password</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300" 
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Remembered your password? <a href="/login" className="text-indigo-600 font-medium">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}
