import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";

const TopPicks: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const topPicks = async () => {
      try {
        const response = await axiosInstance.get("/blogs/top-picks");
        if (response.status === 200) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching subServices:", error);
      }
    };
    topPicks();
  }, []);
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-4 text-lg">Top Picks</h4>

      {blogs.map((pick, index) => (
        <div
          className="mb-6 cursor-pointer"
          key={index}
          onClick={() => {
            router.push(`/blogs/${pick._id}`);
          }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1"></div>
          <p className="font-medium text-sm text-black leading-snug">
            {pick.title}
          </p>
          <p className="flex items-center text-xs text-gray-500 mt-1 gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {new Date(pick.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>{" "}
        </div>
      ))}

      {/* <p className="text-sm text-gray-500 underline cursor-pointer hover:text-black">
        See the full list
      </p> */}
    </div>
  );
};

export default TopPicks;
