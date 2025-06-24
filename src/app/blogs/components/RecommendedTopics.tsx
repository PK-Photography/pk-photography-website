import React from "react";

const RecommendedTopics: React.FC = () => {
  const tags = ["Photography", "Live Streaming", "Camera", "Technology"];
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-3">Recommended topics</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTopics;