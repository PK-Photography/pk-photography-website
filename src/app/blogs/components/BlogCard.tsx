import React from "react";
import Image from "next/image";

interface Blog {
  title: string;
  subtitle: string;
  date: string;
  image?: string;
  stats?: {
    views: string;
    comments: number;
  };
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="flex justify-between border-b py-6 gap-6">
      {/* Left content */}
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="text-[22px] font-bold leading-snug hover:underline cursor-pointer">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-[15px] leading-relaxed">
          {blog.subtitle}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span>{blog.date}</span>
            <span className="flex items-center gap-1">
              <Image src="/services/views.png" alt="views" width={24} height={24} />
              {blog.stats?.views || "5.8K"}
            </span>
            <span className="flex items-center gap-1">
              <Image src="/services/comments.png" alt="comments" width={24} height={24} />
              {blog.stats?.comments || 69}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/services/bookmark.png" alt="bookmark" width={24} height={24} />
            <Image src="/services/share.png" alt="share" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Blog image */}
      <div className="w-[160px] h-[100px] shrink-0 rounded-md overflow-hidden relative">
        <Image
          src={blog.image || "/services/default.png"}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;