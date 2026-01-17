import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { Blog } from "../api/blogs";
import { getAllBlogs } from "../api/blogs";

interface BlogListProps {
  onSelect?: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onSelect }) => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError && error instanceof Error) return <p>{error.message}</p>;

  const handleClick = (id: number) => {
    if (window.innerWidth < 768) {
      navigate(`/blogs/${id}`); // Mobile → new page
    } else {
      onSelect?.(id); // Desktop → same page
    }
  };

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <div
          key={blog.id}
          className="p-4 shadow-2xl rounded-lg cursor-pointer bg-white hover:bg-gray-100"
          onClick={() => handleClick(blog.id)}
        >
          <h2 className="font-bold text-lg">{blog.title}</h2>
          <p className="text-gray-600 text-sm">{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
