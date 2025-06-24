import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "10 Best Places in Mumbai for Pre-Wedding Shoot.",
    subtitle: "And inVision is now gone.",
    date: "Jan 7, 2024",
    image: "/services/offer.png"
  },
  {
    title: "Joker: Folie à Deux – A Bold Musical Journey through Chaos.",
    subtitle: "Understanding the mystery of design through an analogy",
    date: "2d ago",
    image: "/services/offer.png"
  },
  {
    title: "Capturing Confidence: The Best Headshot Experience at PK Photography in Mumbai.",
    subtitle: "The simple commitment most people avoid that can dramatically",
    date: "Dec 17, 2024",
    image: "/services/offer.png"
  },
  {
    title: "Dandiya Nights Unplugged.",
    subtitle: "Web design is getting out of hand again.",
    date: "Sep 3, 2024",
    image: "/services/offer.png"
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="lg:col-span-2">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;