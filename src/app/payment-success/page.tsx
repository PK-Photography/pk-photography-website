"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    toast.success("Payment Successful!");
    // You can also call backend to finalize booking here
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-green-600">Thank you!</h2>
      <p className="mt-2 text-gray-700">Your payment was successful and booking confirmed.</p>
    </div>
  );
}