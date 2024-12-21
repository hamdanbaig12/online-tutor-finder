// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Find Your Perfect Private Tutor</h1>
        <p className="mt-4">Bridging the gap between learning and teaching</p>
        <div className="mt-6 space-x-4">
          <Link to="/register/tutor" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Register as Tutor</Link>
          <Link to="/register/parent" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">Register as Parent</Link>
          <Link to="/register/student" className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">Register as Student</Link>
          <Link to="/login" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800">Login</Link>
        </div>
      </header>
      <main className="container mx-auto py-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Course Cards */}
            <div className="p-4 bg-white shadow-md rounded">Course 1</div>
            <div className="p-4 bg-white shadow-md rounded">Course 2</div>
            <div className="p-4 bg-white shadow-md rounded">Course 3</div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          &copy; 2024 Online Tutor Finder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
