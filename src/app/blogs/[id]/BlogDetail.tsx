"use client";

import Image from "next/image";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { useState } from "react";

interface Comment {
  name: string;
  comment: string;
}

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  author: string;
  content: string;
  views: number;
  comments: Comment[];
  createdAt: string;
}

export default function BlogDetail({ blog }: { blog: Blog }) {
  const [comments, setComments] = useState<Comment[]>(blog.comments);

  const handleAddComment = (newComment: Comment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {blog.title}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-800  text-base sm:text-xl">{blog.subtitle}</p>

      {/* Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image
          src={blog.imageUrl || "/services/offer.png"}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div
        className="prose prose-green max-w-none text-gray-700 text-base sm:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Author and Date */}
      <p className="text-sm text-gray-500">
        By {blog.author} •{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      {/* Comments Section */}
      <div className="mt-10 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Comments
        </h2>
        <CommentForm blogId={blog._id} onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
