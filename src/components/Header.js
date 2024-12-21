import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Delay to ensure navigation and rendering
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 bg-blue-600 text-white shadow-md z-50">
      <div className="relative">
        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-red-500 z-50"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Online Tutor Finder</div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200" onClick={handleHomeClick}>
            Home
          </Link>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScrollToSection("courses")}
          >
            Courses
          </button>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScrollToSection("about")}
          >
            About Us
          </button>
          <button
            className="hover:text-gray-200"
            onClick={() => handleScrollToSection("contact")}
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
