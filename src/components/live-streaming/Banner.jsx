"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
const backgroundVideo = "/live-streaming/coverpage.mp4";
const fallbackImage = "/live-streaming/audio_equipment.jpg";

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <HeroSection>
      <VideoBackground>
        {!videoLoaded && (
          <Image
            src={fallbackImage}
            alt="Loading Preview"
            fill
            className="object-cover z-0"
            priority
          />
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          style={{ display: videoLoaded ? "block" : "none" }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoBackground>

      <Header />
      <Content>
        <Title>Experience Live Streaming Like Never Before</Title>
        <Description>
          Broadcast your events in high-definition to a global audience with PK
          Photography—your trusted partner in seamless live streaming.
        </Description>
      </Content>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  height: 85vh;
  width: 100%;
  position: relative;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 35px;
  }
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: white;
    display: block;
    border-radius: 1px;
  }

  span:nth-child(2) {
    width: 75%;
    align-self: flex-start;
  }

  span:nth-child(3) {
    width: 50%;
    align-self: flex-start;
  }
`;

const Content = styled.div`
  padding: 0 4rem;
  margin-top: auto;
  max-width: 1100px;
  position: relative;
  z-index: 2;
  align-self: flex-start;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 650px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default Banner;
