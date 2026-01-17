// src/CreateBlog.tsx
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "./api/blogs";
import Navbar from "./components/Navbar";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(""); // ✅ New state for image URL

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newBlog: { title: string; description: string; content: string; coverImage?: string }) =>
      createBlog(newBlog),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"] as const);
      setTitle("");
      setDescription("");
      setContent("");
      setCoverImage(""); // Clear image URL
      alert("Blog created successfully!");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, description, content, coverImage });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="bg-[#F6F6F8] min-h-screen pt-16">
        <div className="max-w-xl mx-auto p-6 bg-white shadow-2xl rounded-2xl">
          <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="border p-2 w-full"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className="border p-2 w-full"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <textarea
              className="border p-2 w-full"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              required
            />

            {/* Image URL Input */}
            <input
              className="border p-2 w-full"
              placeholder="Cover Image URL (optional)"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create Blog
            </button>
          </form>

          {/* Error */}
          {mutation.isError && (
            <p className="text-red-500 mt-2">{(mutation.error as Error).message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
