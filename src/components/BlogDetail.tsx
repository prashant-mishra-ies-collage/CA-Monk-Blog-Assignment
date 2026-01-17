import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";
import type { Blog } from "../api/blogs";

interface BlogDetailProps {
  blogId?: number;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId }) => {
  const { data, isLoading, isError, error } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p className="text-gray-500">Select a blog to see details</p>;
  if (isLoading) return <p className="text-gray-500">Loading blog...</p>;
  if (isError && error instanceof Error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className=" rounded-lg shadow-md bg-white">
      {data?.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
      )}
      <h1 className="text-3xl font-bold pl-6 mb-4">{data?.title}</h1>
      {data?.date && (
        <p className="text-gray-400 text-sm pl-6 mb-4">{new Date(data.date).toLocaleDateString()}</p>
      )}
      <p className="text-gray-700 pl-6 leading-relaxed">{data?.content}</p>
      {data?.category && (
        <div className="mt-4 pl-6 text-sm text-gray-500">
          Categories: {data.category.join(", ")}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
