"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosConfig";
import GoogleLoginButton from "@/components/GoogleLoginButton";

export default function LoginPromptModal({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) setShouldRender(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/login", formData);
      if (res.data.success) {
        toast.success("Login successful!");
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        onClose();
        router.push("/profile");
      } else {
        toast.error(res.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0">
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-10">
          <Dialog.Title className="text-xl font-semibold text-gray-900 text-center">
            Welcome to PK Photography
          </Dialog.Title>
          <p className="text-sm text-gray-600 text-center mb-4 mt-4">
            Log in to access your personalized dashboard, downloads, and booking history.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            <a href="/forgot-password" className="underline hover:text-black">
              Forgot Password?
            </a>
          </p>

          <p className="text-center text-sm text-gray-600 mt-2">
            Don’t have an account?{" "}
            <a href="/signup" className="underline font-medium text-black">
              Sign Up
            </a>
          </p>

          <div className="mt-4">
            <GoogleLoginButton />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}