/* eslint-disable react/prop-types */
import { FaRegMoon } from "react-icons/fa6";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Property Dashboard</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
        >
          <FaRegMoon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
