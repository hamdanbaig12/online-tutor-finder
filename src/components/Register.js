import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto p-4 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 drop-shadow-lg">Register</h1>
      <div
        className="flex flex-row justify-center items-center space-x-6 h-80 bg-gradient-to-r from-purple-400 via-green-300 to-orange-300 rounded-lg p-6 shadow-inner"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      >
        <Link
          to="/register-parent"
          className="bg-gradient-to-b from-blue-400 to-blue-500 text-white py-4 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 flex flex-col items-center justify-center w-1/4 h-48 text-center text-xl font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          <div>Register as Parent</div>
          <p className="text-sm mt-2">Find the best tutors for your children</p>
        </Link>
        <Link
          to="/register-tutor"
          className="bg-gradient-to-b from-blue-400 to-blue-500 text-white py-4 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 flex flex-col items-center justify-center w-1/4 h-48 text-center text-xl font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          <div>Register as Tutor</div>
          <p className="text-sm mt-2">Join us to teach and inspire students</p>
        </Link>
        <Link
          to="/register-student"
          className="bg-gradient-to-b from-blue-400 to-blue-500 text-white py-4 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 flex flex-col items-center justify-center w-1/4 h-48 text-center text-xl font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          <div>Register as Student</div>
          <p className="text-sm mt-2">Learn and grow with the best tutors</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
