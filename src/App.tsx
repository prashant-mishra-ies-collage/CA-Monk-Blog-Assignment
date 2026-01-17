import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogDetailPage from "./BlogDetailPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} /> {/* Mobile detail page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
