"use client";

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Banner = ({
  fallbackImage,
  backgroundVideo1,
  backgroundVideo2,
  title,
  description,
}) => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [videosLoaded, setVideosLoaded] = useState({ v1: false, v2: false });
  const router = useRouter();

  // Switch between videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev === 1 ? 2 : 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleVideoLoad = (key) => {
    setVideosLoaded((prev) => ({ ...prev, [key]: true }));
  };

  const allLoaded = videosLoaded.v1 && videosLoaded.v2;

  return (
    <HeroSection>
      <VideoBackground>
        {!allLoaded && (
          <Image
            src={fallbackImage}
            alt="Loading Preview"
            fill
            className="object-cover z-0"
            priority
          />
        )}

        <AnimatedVideo
          src={backgroundVideo1}
          active={activeVideo === 1}
          direction="up"
          onCanPlay={() => handleVideoLoad("v1")}
        />
        <AnimatedVideo
          src={backgroundVideo2}
          active={activeVideo === 2}
          direction="right"
          onCanPlay={() => handleVideoLoad("v2")}
        />
      </VideoBackground>

      <Content>
        <motion.div
          key={activeVideo} // triggers re-mount on video change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
        </motion.div>
      </Content>
    </HeroSection>
  );
};

// AnimatedVideo Component
const AnimatedVideo = ({ src, active, direction, onCanPlay }) => (
  <StyledVideo
    autoPlay
    muted
    loop
    playsInline
    onCanPlay={onCanPlay}
    $active={active}
    $direction={direction}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </StyledVideo>
);

// Styled Components

const HeroSection = styled.div`
  height: 85vh;
  width: 100%;
  position: relative;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: left;
  align-items: end;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
    z-index: 1;
    pointer-events: none;
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
`;

const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-in-out;
  opacity: 0;
  z-index: 0;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      z-index: 1;
    `}

  ${({ $active, $direction }) =>
    !$active &&
    $direction === "right" &&
    css`
      transform: translateX(100%);
    `}

  ${({ $active, $direction }) =>
    !$active &&
    $direction === "up" &&
    css`
      transform: translateY(100%);
    `}
`;

const Content = styled.div`
  padding: 0 3rem; /* Adjusted padding */
  margin-top: 2rem;
  max-width: 1100px;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }

  @media (max-width: 480px) {
    padding-left: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: start;

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
  margin-bottom: 4rem;
  text-align: start;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 650px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
     margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
     margin-bottom: 2rem;
  }
`;


export default Banner;
