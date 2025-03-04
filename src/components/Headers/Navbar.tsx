import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-yellow-400 py-4 mt-4">
      <div className="container mx-auto flex justify-center space-x-10 font-poppins">
        <Link to="/" className="text-white text-lg font-bold hover:opacity-80">
          Home
        </Link>
        <Link
          to="/?content=skill"
          className="text-white text-lg font-bold hover:opacity-80"
        >
          Skill
        </Link>
        <Link
          to="/?content=about"
          className="text-white text-lg font-bold hover:opacity-80"
        >
          About Me
        </Link>
        <Link
          to="/project"
          className="text-white text-lg font-bold hover:opacity-80"
        >
          Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
