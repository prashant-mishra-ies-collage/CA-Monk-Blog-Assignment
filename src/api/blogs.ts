// src/api/blogs.ts

export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  category?: string[];
  coverImage?: string;
  date?: string;
}

export const getAllBlogs = async (): Promise<Blog[]> => {
  const response = await fetch("http://localhost:3001/blogs");

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
};





export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog by id");
  return res.json();
};






export const createBlog = async (blog: {
  title: string;
  description: string;
  content: string;
}): Promise<Blog> => {
  const response = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...blog,
      date: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create blog");
  }

  return response.json();
};

