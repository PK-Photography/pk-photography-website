"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const hdCameraImg = "/live-streaming/multi_camera_livestream.png";
const audioEquipmentImg = "/live-streaming/audio_equipment.png";
const liveStreamingGearImg = "/live-streaming/live_streaming_gear.png";
const hdmiWirelessImg =
  "/live-streaming/HD_HDMI_wireless_video_transmission.png";

const Equipment = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slideInterval = 5000;

  const equipmentData = [
    {
      id: 1,
      title: "Multi-Camera Livestream Setup",
      description:
        "Our livestream production is powered by a professional multi-camera setup to ensure cinematic quality and seamless coverage from every angle. We use a combination of high-end cinema and mirrorless cameras.",
      image: hdCameraImg,
      features: [
        "Sony FX6 – Full-frame cinema camera for stunning depth and dynamic range",
        "Sony FX30, a7R V, Canon R6 & R8 – For creative angles and reliable autofocus",
        "Sony PXW-Z90 – Broadcast-ready camcorder with 4K HDR capabilities",
      ],
      icon: "camera",
    },
    {
      id: 2,
      title: "Multi-Camera Switching System",
      description:
        "To deliver seamless and dynamic live productions, we use industry-standard multi-camera switchers that allow real-time switching between multiple camera feeds without any lag or delay.",
      image: audioEquipmentImg,
      features: [
        "Blackmagic ATEM Mini – Ideal for compact shoots, enabling smooth transitions, picture-in-picture, and audio mixing in real-time",
        "Blackmagic ATEM Extreme Pro – A powerhouse for larger productions with up to 8 HDMI inputs, advanced effects, live streaming, and multiview monitoring",
      ],
      icon: "stream",
    },
    {
      id: 3,
      title: "Professional-Grade Lighting Setup",
      description:
        "Lighting plays a crucial role in the visual quality of any livestream or video production. At PK Photography, we use professional-grade lighting equipment to ensure every subject is well-lit, skin tones look natural, and the overall scene has a cinematic depth.",
      image: liveStreamingGearImg,
      features: [
        "Soft LED panels for even, flattering light",
        "RGB lights to enhance mood and add creative tones",
        "Spotlights and modifiers for controlled highlights and shadows",
      ],
      icon: "stream",
    },
    {
      id: 4,
      title: "High-Quality HDMI & Wireless Video Transmission",
      description:
        "To ensure flexibility and flawless video quality during live events, our setup includes premium HDMI cables and professional-grade wireless video transmitters.",
      image: hdmiWirelessImg,
      features: [
        "High-speed HDMI cables supporting 4K resolution",
        "Wireless video transmitters with real-time, low-latency transmission",
        "Clean setup with minimal cabling for dynamic environments",
      ],
      icon: "transmission",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === equipmentData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? equipmentData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const pauseSlideshow = () => {
    setIsPaused(true);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <EquipmentSection>
      <SectionHeader>
        <SectionTitle>Cutting-Edge Setup & Equipment</SectionTitle>
        <SectionDescription>
          At PK Photography, we believe that superior technology is the backbone
          of a flawless live streaming experience. Our setups include:
        </SectionDescription>
      </SectionHeader>
      <SliderContainer
        onMouseEnter={pauseSlideshow}
        onTouchStart={pauseSlideshow}
      >
        <SlideButton
          onClick={() => {
            prevSlide();
            pauseSlideshow();
          }}
          aria-label="Previous slide"
          $side="left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </SlideButton>

        <SliderContent>
          {equipmentData.map((item, index) => (
            <Slide key={item.id} $active={index === activeSlide}>
              <SlideGrid>
                <ImageContainer>
                  <SlideImage src={item.image} alt={item.title} />
                </ImageContainer>

                <ContentContainer>
                  <EquipmentIcon>
                    {item.icon === "camera" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    )}
                    {item.icon === "audio" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M8 12a4 4 0 1 1 8 0m-4-4v8"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    )}
                    {item.icon === "stream" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M8 12h8M16 8l-4 4-4-4M16 16l-4-4-4 4"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    )}

                    {item.icon === "transmission" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M10 15c0-1.1 0.9-2 2-2s2 0.9 2 2"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <circle
                          cx="12"
                          cy="18"
                          r="0.5"
                          stroke="#555"
                          strokeWidth="1.5"
                          fill="#555"
                        />
                      </svg>
                    )}
                  </EquipmentIcon>

                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>

                  <FeaturesList>
                    {item.features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureIcon>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="#555"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M8 12L11 15L16 9"
                              stroke="#555"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </FeatureIcon>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </ContentContainer>
              </SlideGrid>
            </Slide>
          ))}
        </SliderContent>

        <SlideButton onClick={nextSlide} aria-label="Next slide" $side="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </SlideButton>
      </SliderContainer>

      <DotsContainer>
        {equipmentData.map((_, index) => (
          <Dot
            key={index}
            $active={index === activeSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </EquipmentSection>
  );
};

const EquipmentSection = styled.section`
  padding: 5rem 0;
  background-color: white;

  @media (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 1024px) {
    padding: 0 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 0 2.5rem;
  }
`;

const SliderContent = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: ${(props) => (props.$active ? "block" : "none")};
  width: 100%;
`;

const SlideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;

  height: 350px;
  width: 100%;

  @media (max-width: 992px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  object-position: center center;

  display: block;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EquipmentIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
  color: #555;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    margin-bottom: 0.7rem;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 1rem;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
  color: #444;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const FeatureIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 0.7rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }
`;

const SlideButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  position: absolute;
  z-index: 10;

  left: ${(props) => (props.$side === "left" ? "0" : "auto")};
  right: ${(props) => (props.$side === "right" ? "0" : "auto")};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.2rem;
  }
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#4285f4" : "#ddd")};
  margin: 0 6px;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.$active ? "#4285f4" : "#bbb")};
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
    margin: 0 5px;
  }
`;

export default Equipment;
