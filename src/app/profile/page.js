"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosConfig";

export default function UserProfile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInitials = (name) => (name ? name.charAt(0).toUpperCase() : "U");

  const getRandomColor = () => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user?.accessToken) {
      router.push("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const res = await axiosInstance.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        });

        if (res.data.success) {
          setUser(res.data.data);
        } else {
          toast.error("Failed to fetch user profile.");
        }
      } catch (error) {
        console.error("Profile Fetch Error:", error);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [session, status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg relative flex items-center space-x-6">
        <div className={`w-24 h-24 flex items-center justify-center rounded-full text-white text-3xl font-bold ${getRandomColor()}`}>
          {user && getInitials(user.fullName)}
        </div>
        <div className="flex-1">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : user ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-700">{user.fullName}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">{user.mobileNo}</p>
              <p className="text-sm text-gray-400 mt-2">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          ) : (
            <p className="text-center text-red-500">Failed to load profile.</p>
          )}
        </div>
        <button
          onClick={() => router.push("/edit-profile")}
          className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
        >
          Edit
        </button>
      </div>
    </div>
  );
}