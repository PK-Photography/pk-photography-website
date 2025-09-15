"use client";
import { useEffect, useState } from "react";
import BlogDetail from "./BlogDetail";
import axiosInstance from "@/utils/axiosConfig";

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  author: string;
  content: string;
  views: number;
  comments: { name: string; comment: string }[];
  createdAt: string;
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axiosInstance.get(`/blogs/${params.id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [params.id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4  border-solid"></div>
        <span className="ml-4  text-lg font-medium">Loading Blogs ...</span>
      </div>
    );
  }

  return <BlogDetail blog={blog} />;
}
