import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const TopPicks: React.FC = () => {
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-4 text-lg">Top Picks</h4>

      {/* Pick 1 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          
        </div>
        <p className="font-medium text-sm text-black leading-snug">
          Capturing Elegance: A Timeless Portrait of Tanya in Traditional Indian Festive Wear
        </p>
        <p className="text-xs text-gray-500 mt-1">4d ago</p>
      </div>

      {/* Pick 2 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          
          <span>
            In <span className="text-black">Shoots</span> by{" "}
            <span className="text-black">Prabhakar Kumar</span>
            <span className="text-blue-500 ml-1">🔵</span>
          </span>
        </div>
        <p className="font-medium text-sm text-black leading-snug">
          Shooting a Dynamic Reel with Actor and Influencer Reyhna Pandit.
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>Mar 10</span>
        </div>
      </div>

      {/* Pick 3 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          
          <span>
            In <span className="text-black">Products</span> by{" "}
            <span className="text-black">The Godrej Newsletter</span>
          </span>
        </div>
        <p className="font-medium text-sm text-black leading-snug">
          New Camera Gear Released!
        </p>
        <p className="text-xs text-gray-500 mt-1">4d ago</p>
      </div>

      <p className="text-sm text-gray-500 underline cursor-pointer hover:text-black">
        See the full list
      </p>
    </div>
  );
};

export default TopPicks;