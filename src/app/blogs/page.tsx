import React from "react";
import BlogList from "./components/BlogList";
import TopPicks from "./components/TopPicks";
import OurOffers from "./components/OurOffers";
import RecommendedTopics from "./components/RecommendedTopics";
import SuggestedForYou from "./components/SuggestedForYou";
import BookingPrompt from "./components/BookingPrompt";
import ExploreGallery from "./components/ExploreGallery";
import OurServices from "./components/OurServices";

const FooterNav: React.FC = () => {
  const links = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Press",
    "Blog",
    "Privacy",
  ];

  return (
    <div className="mt-6">
      <ul className="flex flex-wrap justify-start gap-x-3 gap-y-2 text-sm text-gray-500">
        {links.map((link, idx) => (
          <li key={idx} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <BlogList />
        <aside className="hidden lg:block">
          <TopPicks />
          <OurOffers />
          <RecommendedTopics />
          {/* <SuggestedForYou /> */}
          <BookingPrompt />
          <ExploreGallery />
          <OurServices />
          <FooterNav /> {/* ✅ Footer navigation here */}
        </aside>
      </div>
    </div>
  );
};

export default BlogsPage;