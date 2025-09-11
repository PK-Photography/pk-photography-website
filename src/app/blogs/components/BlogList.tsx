import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axiosInstance from "@/utils/axiosConfig";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get(`/blogs`);
        if (response.status === 200) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching subServices:", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="lg:col-span-2">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
