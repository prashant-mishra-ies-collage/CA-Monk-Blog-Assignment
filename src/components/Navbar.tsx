
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className=" text-black p-4 px-6 flex justify-between items-center bg-white shadow-sm">
      {/* Left side: App title */}
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        My Blog App
      </h1>

      {/* Right side: Create Blog button */}
      <button
        className="bg-blue-300 px-4 py-2 rounded hover:bg-blue-500"
        onClick={() => navigate("/create")}
      >
        Create Blog
      </button>
    </nav>
  );
};

export default Navbar;
