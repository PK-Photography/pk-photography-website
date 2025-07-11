"use client";
import React from "react";
import Landing from "../../components/client/Landing";
import UserCard from "../../components/client/UserCard";
import "../globals.css"; 

const Home = () => {
  return (
    <div className="bg-[white]">
      <Landing />
      <UserCard />
    </div>
  );
};

export default Home;
