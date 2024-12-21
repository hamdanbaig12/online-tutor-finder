import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Online Tutor Finder</div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScroll("courses")}
          >
            Courses
          </button>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScroll("about")}
          >
            About Us
          </button>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>
        </nav>
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 rounded-md border-none outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
