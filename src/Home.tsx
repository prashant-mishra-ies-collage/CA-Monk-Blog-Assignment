import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import Navbar from "./components/Navbar";


const Home = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | undefined>();

  return (
    <div>
      <Navbar />
       <div className="text-center py-6">
        <h1 className="text-3xl font-bold">CA Monk Blog</h1>
        <p className="text-sm text-gray-600">
          Stay updated with finance, accounting, and career growth
        </p>
      </div>
    <div className="p-4 bg-[#f9f9f9]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Blog List */}
        <div className="w-full md:w-1/3">
          <BlogList onSelect={setSelectedBlogId} />
        </div>

        {/* Blog Detail – desktop only */}
        <div className="hidden md:block md:w-2/3">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
