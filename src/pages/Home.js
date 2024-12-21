import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center my-8 bg-gradient-to-r from-blue-500 to-green-400 text-white py-12 rounded shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Perfect Private Tutor</h1>
        <p className="text-lg mb-6">
          Connect with expert tutors for personalized learning.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-100 shadow-md font-semibold"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 shadow-md font-semibold"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="my-12 relative">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Courses</h2>
        <p className="text-center text-gray-700 mb-8">
          Explore our most sought-after courses tailored for every learner.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {[
            {
              title: "Mathematics",
              description: "Learn algebra, geometry, and more with expert tutors.",
              bgColor: "bg-blue-500",
              img: "/assets/img/courses/Mathematics.jpg",
            },
            {
              title: "Science",
              description: "Explore physics, chemistry, and biology with qualified tutors.",
              bgColor: "bg-blue-400",
              img: "/assets/img/courses/Science.jpg",
            },
            {
              title: "English",
              description: "Improve your language skills with professional guidance.",
              bgColor: "bg-blue-300",
              img: "/assest/img/courses/English.jpg",
            },
            {
              title: "Programming",
              description: "Master coding with courses in Python, Java, and more.",
              bgColor: "bg-blue-600",
              img: "/assest/img/courses/Programming.jpeg",
            },
            {
              title: "History",
              description: "Delve into the past with engaging history lessons.",
              bgColor: "bg-blue-700",
              img: "/assets/img/courses/History.jpg",
            },
            {
              title: "Economics",
              description: "Understand the principles of economics with expert tutors.",
              bgColor: "bg-blue-800",
              img: "/assets/img/courses/Economics.jpg",
            },
          ].map((course, index) => (
            <div
              key={index}
              className={`${course.bgColor} text-white rounded shadow-md hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden relative p-6 h-80`}
              style={{ backgroundImage: `url(${course.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center opacity-50 bg-black"
                style={{ pointerEvents: "none" }}
              ></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-2 relative bg-white text-blue-600 px-3 py-1 rounded shadow-md inline-block">
                  {course.title}
                </h3>
                <p className="text-sm relative">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="my-12 bg-gradient-to-r from-green-100 via-blue-50 to-purple-100 py-8 px-6 rounded shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Us</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          We connect students, parents, and tutors seamlessly. Our mission is to
          provide a reliable platform for learners to find the best tutors tailored
          to their needs. With flexible scheduling and top-rated professionals, we
          make learning accessible for everyone.
        </p>
        <div className="mt-8 text-center">
          <img
            src='/assest/img/tutor-finder.png'
            alt="About Us"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">
          Have questions? Reach out to us, and we'll be happy to assist you!
        </p>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
