"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "@/utils/axiosConfig";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axiosInstance
        .get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          setUser(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found or unauthorized.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.fullName}</h1>
      <img src={user.profileImage} alt="Profile" />
      <p>Email: {user.email}</p>
    </div>
  );
}
