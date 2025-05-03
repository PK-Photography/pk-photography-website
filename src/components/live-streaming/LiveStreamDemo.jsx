"use client";

import React, { useState } from "react";
import styled from "styled-components";
const churchMassImg = "/live-streaming/church_mass_live_streaming.jpg";

const LiveStreamDemo = () => {
  const [message, setMessage] = useState("");
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <LiveStreamContainer>
      <SectionTitle>Live Streaming</SectionTitle>

      <LiveStreamContent>
        <VideoSection>
          <VideoContainer>
            <StreamImage src={churchMassImg} alt="Church Mass Live Stream" />
            <LiveBadge>
              <LiveDot />
              LIVE
            </LiveBadge>
            <ViewerCount>
              <ViewerIcon>👥</ViewerIcon>
              1.2k viewers
            </ViewerCount>
            <Duration>02:45:30</Duration>
            <FullscreenButton aria-label="Fullscreen">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14h2v4h4v2H4v-6zm2-4H4V4h6v2H6v4zm8 10h4v-4h2v6h-6v-2zm4-10V6h-4V4h6v6h-2z"
                  fill="#FFFFFF"
                />
              </svg>
            </FullscreenButton>
            <SettingsButton aria-label="Settings">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#FFFFFF" />
                <path
                  d="M19.4 13l-.3.6c-.9 1.9-2.3 3.4-4.1 4.5l-.7.3h-4.7l-.7-.3c-1.8-1-3.2-2.6-4.1-4.5l-.3-.6V11l.3-.6c.9-1.9 2.3-3.4 4.1-4.5l.7-.3h4.7l.7.3c1.8 1 3.2 2.6 4.1 4.5l.3.6v2z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </SettingsButton>
          </VideoContainer>

          <StreamInfoContainer>
            <StreamTitle>Church Mass Live Streaming</StreamTitle>

            <StreamActions>
              <ShareButton aria-label="Share">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .4.1.8.2 1.2l-5.8 3.5c-.6-.5-1.4-.7-2.4-.7-1.7 0-3 1.3-3 3s1.3 3 3 3c.9 0 1.7-.3 2.4-.7l5.8 3.5c-.1.4-.2.8-.2 1.2 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3c-.9 0-1.7.3-2.4.7L10 12.2c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l5.5-3.3c.7.4 1.5.5 2.5.5z"
                    fill="currentColor"
                  />
                </svg>
              </ShareButton>

              <LikeButton
                liked={liked}
                onClick={handleLike}
                aria-label={liked ? "Unlike" : "Like"}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={liked ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </LikeButton>
            </StreamActions>
          </StreamInfoContainer>

          <EventInfo>
            <EventTag>Wedding</EventTag>
            <EventDate>March 10, 2025 • 2:00 PM EST</EventDate>
          </EventInfo>

          <EventDescription>
            Join us for an exclusive behind-the-scenes look at our latest
            wedding photography collection. Experience the magic of capturing
            precious moments with our award-winning photography team.
          </EventDescription>
        </VideoSection>

        <ChatSection>
          <ChatHeader>Live Chat</ChatHeader>

          <ChatMessages>
            <ChatMessage>
              <ChatAvatar>👤</ChatAvatar>
              <ChatContent>
                <ChatUserName>Emily Thompson</ChatUserName>
                <ChatText>
                  The lighting setup looks amazing! Can&apos;t wait to see more.
                </ChatText>
              </ChatContent>
            </ChatMessage>

            <ChatMessage>
              <ChatAvatar>👤</ChatAvatar>
              <ChatContent>
                <ChatUserName>Michael Chen</ChatUserName>
                <ChatText>What camera are you using for these shots?</ChatText>
              </ChatContent>
            </ChatMessage>

            <ChatMessage>
              <ChatAvatar>👤</ChatAvatar>
              <ChatContent>
                <ChatUserName>Sarah Williams</ChatUserName>
                <ChatText>The composition is perfect! 😍</ChatText>
              </ChatContent>
            </ChatMessage>
          </ChatMessages>

          <ChatInputForm onSubmit={handleSubmit}>
            <ChatInput
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={handleMessageChange}
            />
            <SendButton type="submit" aria-label="Send message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </SendButton>
          </ChatInputForm>
        </ChatSection>
      </LiveStreamContent>
    </LiveStreamContainer>
  );
};

const LiveStreamContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
  }
`;

const LiveStreamContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.5rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 300px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const VideoSection = styled.div`
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  height: 400px;

  @media (max-width: 1200px) {
    height: 350px;
  }

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

const StreamImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;

const LiveBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #e74c3c;
  color: white;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
`;

const LiveDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  margin-right: 5px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    margin-right: 4px;
  }
`;

const ViewerCount = styled.div`
  position: absolute;
  top: 1rem;
  left: 5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    top: 0.75rem;
    left: 4.5rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
`;

const ViewerIcon = styled.span`
  margin-right: 5px;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-right: 4px;
  }
`;

const Duration = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
`;

const FullscreenButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 480px) {
    bottom: 0.75rem;
    right: 0.75rem;
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SettingsButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 4rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 480px) {
    bottom: 0.75rem;
    right: 3.25rem;
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const StreamInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0.5rem;

  @media (max-width: 768px) {
    padding: 0.9rem 0.9rem 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.8rem 0.3rem;
  }
`;

const StreamTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #333;
  margin: 0;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StreamActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ShareButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  padding: 0.3rem;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: #333;
  }

  @media (max-width: 480px) {
    padding: 0.2rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.liked ? "#e74c3c" : "#555")};
  cursor: pointer;
  padding: 0.3rem;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${(props) => (props.liked ? "#c0392b" : "#333")};
  }

  @media (max-width: 480px) {
    padding: 0.2rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 0.5rem;

  @media (max-width: 768px) {
    padding: 0 0.9rem 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.8rem 0.3rem;
    flex-wrap: wrap;
  }
`;

const EventTag = styled.span`
  background-color: #e8f5e9;
  color: #388e3c;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  margin-right: 1rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.15rem 0.6rem;
    margin-right: 0.7rem;
    margin-bottom: 0.3rem;
  }
`;

const EventDate = styled.span`
  color: #666;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const EventDescription = styled.p`
  padding: 0 1rem;
  color: #555;
  line-height: 1.6;
  margin-top: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 0 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 0 0.8rem;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 0.4rem;
  }
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eee;
  height: 100%;

  @media (max-width: 992px) {
    border-left: none;
    border-top: 1px solid #eee;
  }
`;

const ChatHeader = styled.div`
  padding: 1rem;
  font-weight: 400;
  color: #333;
  border-bottom: 1px solid #eee;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  max-height: 320px;

  @media (max-width: 1200px) {
    max-height: 300px;
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
    max-height: 280px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    max-height: 240px;
  }
`;

const ChatMessage = styled.div`
  display: flex;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.9rem;
  }
`;

const ChatAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #f1f3f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
    margin-right: 0.6rem;
  }
`;

const ChatContent = styled.div`
  flex-grow: 1;
`;

const ChatUserName = styled.div`
  font-weight: 400;
  color: #333;
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.15rem;
  }
`;

const ChatText = styled.div`
  color: #555;
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

const ChatInputForm = styled.form`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ChatInput = styled.input`
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  outline: none;
  font-weight: 300;
  letter-spacing: 0.3px;

  &:focus {
    border-color: #5c899d;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5c899d;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: #4c7383;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    margin-left: 0.4rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export default LiveStreamDemo;
