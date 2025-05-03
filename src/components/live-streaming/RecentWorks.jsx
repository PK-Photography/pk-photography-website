"use client";

import React, { useState } from "react";
import styled from "styled-components";
const saraJamesWeddingImg = "/live-streaming/sara_james_wedding.jpg";
const executivePortraitsImg = "/live-streaming/executive_portraits.jpg";
const techSummitImg = "/live-streaming/tech_summit.jpg";
const weddingImg = "/live-streaming/wedding.jpg";
const urbanFashionShootImg = "/live-streaming/urban_fashion_shoot.jpg";
const springMusicFestivalImg = "/live-streaming/spring_music_festival.jpg";

const RecentWorks = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Juniors Fashion Week Live Mumbai",
      category: "Event",
      date: "June 12, 2024",
      isVideo: true,
      videoUrl: "https://youtu.be/nKdQtOjKTYc",
      videoId: "nKdQtOjKTYc",
      categoryColor: "#e8f5e9",
    },
    {
      id: 2,
      title: "Fr. Agnel Ashram Bandra Church Mass Live",
      category: "Religious",
      date: "May 28, 2024",
      isVideo: true,
      videoUrl: "https://youtu.be/8IOuQzcCuQs",
      videoId: "8IOuQzcCuQs",
      categoryColor: "#e0f2f1",
    },
    {
      id: 3,
      title: "Anoop Lalota Live",
      category: "Performance",
      date: "April 15, 2024",
      isVideo: true,
      videoUrl: "https://youtu.be/8I-Ir6xXC3k",
      videoId: "8I-Ir6xXC3k",
      categoryColor: "#f3e5f5",
    },
    {
      id: 4,

      title: "Sarah & James Wedding",
      category: "Wedding",
      date: "March 5, 2025",
      image: saraJamesWeddingImg,
      categoryColor: "#e0f2f1",
    },
    {
      id: 5,

      title: "Executive Portraits",
      category: "Portrait",
      date: "March 3, 2025",
      image: executivePortraitsImg,
      categoryColor: "#f3e5f5",
    },
    {
      id: 6,

      title: "Tech Summit 2025",
      category: "Event",
      date: "March 1, 2025",
      image: techSummitImg,
      categoryColor: "#e8f5e9",
    },
    {
      id: 7,

      title: "Beach Sunset Wedding",
      category: "Wedding",
      date: "February 28, 2025",
      image: weddingImg,
      categoryColor: "#e0f2f1",
    },
    {
      id: 8,

      title: "Urban Fashion Shoot",
      category: "Portrait",
      date: "February 25, 2025",
      image: urbanFashionShootImg,
      categoryColor: "#f3e5f5",
    },
    {
      id: 9,

      title: "Spring Music Festival",
      category: "Event",
      date: "February 20, 2025",
      image: springMusicFestivalImg,
      categoryColor: "#e8f5e9",
    },
  ];

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <RecentWorksSection>
      <SectionTitle>Recent Works</SectionTitle>

      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImageContainer>
              {project.isVideo ? (
                <VideoThumbnail
                  onClick={() => openVideo(project.videoId)}
                  data-video-id={project.videoId}
                >
                  <YouTubeThumbnail $videoId={project.videoId} />
                  <PlayButton>
                    <svg viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </PlayButton>
                </VideoThumbnail>
              ) : (
                <ProjectImage src={project.image} alt={project.title} />
              )}
            </ProjectImageContainer>

            <ProjectDetails>
              <CategoryTag style={{ backgroundColor: project.categoryColor }}>
                {project.category}
              </CategoryTag>

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDate>{project.date}</ProjectDate>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {activeVideo && (
        <VideoModal onClick={closeModal}>
          <VideoContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeVideo}>×</CloseButton>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </VideoModal>
      )}
    </RecentWorksSection>
  );

  function closeModal(e) {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  }
};

const RecentWorksSection = styled.section`
  padding: 2.5rem 0 3.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 2rem 2rem 3rem;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem 2rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 2rem;
  }
  @media (max-width: 480px) {
    padding: 1.25rem 1rem 1.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.75rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 200px;
  }

  @media (max-width: 992px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    &::after {
      opacity: 0.7;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0.5;
    transition: opacity 0.3s;
  }
`;

const YouTubeThumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `url(https://img.youtube.com/vi/${props.$videoId}/hqdefault.jpg)`};
  background-size: cover;
  background-position: center;
  transition: transform 0.5s;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(220, 38, 38, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background-color 0.3s, transform 0.3s;

  svg {
    width: 30px;
    height: 30px;
  }

  ${ProjectCard}:hover & {
    background-color: rgba(220, 38, 38, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ProjectDetails = styled.div`
  padding: 1.2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem;
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 0.25rem 0.7rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const ProjectDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.3px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: #f8f8f8;
  }
`;

export default RecentWorks;
