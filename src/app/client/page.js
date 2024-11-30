"use client";
import React from "react";
import Landing from "../../components/client/Landing";
import UserCard from "../../components/client/UserCard";
import AdminDashboard from '../../components/client/Admin/AdminDashboard';
import Header from "@/components/header/Header";
import "../globals.css"; 

const Home = () => {
  return (
    <>
    <Header/>
      <Landing />
      <UserCard />
    </>
  );
};

export default Home;
