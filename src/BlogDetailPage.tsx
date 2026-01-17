import { useParams } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Navbar from "./components/Navbar";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id) : undefined;

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <BlogDetail blogId={blogId} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
