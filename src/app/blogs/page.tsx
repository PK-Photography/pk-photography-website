"use client";

import React, { useState } from "react";
import Link from "next/link";

const sampleBlogs = [
  {
    id: 1,
    slug: "joker-folie--deux--a-bold-musical-journey-through-chaos",
    title: "Joker: Folie à Deux – A Bold Musical Journey through Chaos",
    description:
      "If you’re a fan of psychological thrillers that delve deep into the human psyche, then Joker: Folie à Deux is a film you won’t want to miss. Building on the dark and captivating world established in its predecessor, this sequel takes viewers on an emotional rollercoaster as it explores the complexities of love, identity, and madness.",
    date: "10/12/2024",
    image: "/blogs/blog1.webp",
  },
  {
    id: 2,
    slug: "capturing-elegance-a-timeless-portrait-of-tanya-in-traditional-indian-festive-wear",
    title: "Capturing Elegance: A Timeless Portrait of Tanya in Traditional Indian Festive Wear",
    description:
      "At PK Photography, we specialise in creating portraits that not only capture beauty but also tell a story. Recently, we had the pleasure of working with Tanya, a stunning model with a natural flair for traditional Indian attire. In this shoot, Tanya wore a pastel pink lehenga that perfectly blended modern elegance with traditional charm.",
    date: "October 12, 2024",
    image: "/blogs/blog2.jpg",
  },
];

const Blogs = () => {
  const [page] = useState(1);

  return (
    <main className="bg-white text-black min-h-screen px-4 md:px-12 py-20 max-w-6xl mx-auto">
      <div className="grid gap-12">
        {sampleBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="flex flex-col md:flex-row gap-6 border-b pb-10 group"
          >
            <div className="w-full md:w-1/3">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md group-hover:opacity-90 transition"
              />
            </div>
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2 group-hover:underline">{blog.title}</h2>
                <p className="text-gray-700 text-base">{blog.description}</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {new Date(blog.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-20">
        <button
          disabled
          className="text-black border border-gray-300 px-4 py-2 rounded opacity-30 cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-sm pt-2">Page {page}</span>
        <button
          disabled
          className="text-black border border-gray-300 px-4 py-2 rounded opacity-30 cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Blogs;