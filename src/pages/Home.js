import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">
          Online Private Tutor Finder
        </h1>
        <p className="text-gray-700 mb-6">
          Find the best tutors for your needs! Whether you're a student, parent,
          or tutor, we make it easy to connect and learn.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Popular Courses</h2>
        <p className="text-center text-gray-600 mb-6">
          Explore our most in-demand courses designed for all age groups and skill levels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Mathematics</h3>
            <p>Learn algebra, geometry, and more with expert tutors.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Science</h3>
            <p>Explore physics, chemistry, and biology with qualified tutors.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">English</h3>
            <p>Improve your language skills with professional guidance.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Programming</h3>
            <p>Master coding with courses in Python, Java, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">History</h3>
            <p>Delve into the past with engaging history lessons.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Economics</h3>
            <p>Understand the principles of economics with expert tutors.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="my-12 bg-blue-50 py-8 px-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          We are a platform dedicated to connecting students, parents, and tutors
          seamlessly. Our mission is to provide a reliable and efficient way for learners
          to find the best tutors tailored to their needs. With a variety of subjects,
          flexible scheduling, and top-rated professionals, we strive to make learning
          accessible for everyone.
        </p>
        <div className="mt-6 text-center">
          <img
            src="https://via.placeholder.com/600x300"
            alt="About Us"
            className="mx-auto rounded shadow-lg"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-700 mb-6">
          Have questions? Reach out to us, and we'll be happy to assist you!
        </p>
        <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border rounded"
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
              className="w-full mt-1 p-2 border rounded"
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
              className="w-full mt-1 p-2 border rounded"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
