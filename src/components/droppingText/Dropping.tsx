import { useEffect, useState } from 'react';
import './dropping.css';

const words = [
  "Photography",
  "Videography",
  "Events",
  "Headshots",
  "Weddings",
  "Live Streaming",
  "Insta Reels",
  "Ads",
  "Design",
  "Talent",
  "Influencers",
];

const Dropping = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change word every 4 seconds for smoother transitions
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="dropping-headings">
      <span className="animated-word" >{words[currentWordIndex]}</span>
    </div>
  );
};

export default Dropping;
