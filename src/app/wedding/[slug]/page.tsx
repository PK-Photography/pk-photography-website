"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useSearchParams } from "next/navigation";
import SimilarBlogs from "@/components/wedding/SimilarBlogs";
import Image from "next/image";

const WeddingBlog = (props: any) => {
  const { slug } = props.params;
  const name = decodeURIComponent(slug).replace(/\b\w/g, (c) => c);
  const searchParams = useSearchParams();
  const image = searchParams?.get("image");

  interface BlogType {
    date: string;
    type: string;
    header: string;
    content: string;
    videoUrl?: string;
    imageUrls: string[];
  }

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosInstance.get(`/wedding-blogs/${name}`);
        if (response.status === 200) {
          setBlog(response.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [name]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="px-[10%] flex flex-col items-center justify-center text-center my-10">
      {/* Optional featured image */}
      {image && (
        <div className="relative w-full my-10 flex justify-center h-[75vh] max-h-[75vh]">
          <Image
            src={image}
            alt="Service"
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Blog Date */}
      <p className="text-gray-500 mb-2">
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Blog Header */}
      <h1 className="text-3xl font-bold mb-8 mt-4">{blog.header}</h1>

      {/* Blog Content */}
      <div
        className="prose prose-green max-w-4xl text-gray-700 text-lg sm:text-xl leading-relaxed mx-auto"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Optional Video */}
      {blog.videoUrl && (
        <div className="w-full max-w-3xl my-6">
          <video
            src={blog.videoUrl}
            controls
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>
      )}

      {/* Blog Images */}
      {blog.imageUrls && blog.imageUrls.length > 0 && (
        <div className="w-full flex flex-col items-center gap-6">
          {blog.imageUrls.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-3xl h-[75vh] max-h-[75vh]"
            >
              <Image
                src={img}
                alt={`Blog Image ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}

      <SimilarBlogs />

      <p className="text-black text-center text-4xl my-8">
        Capturing moments, creating memories – Pk Photography.
      </p>
    </div>
  );
};

export default WeddingBlog;
