import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/register-parent"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-center"
        >
          Register as Parent
        </Link>
        <Link
          to="/register-tutor"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full text-center"
        >
          Register as Tutor
        </Link>
        <Link
          to="/register-student"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 w-full text-center"
        >
          Register as Student
        </Link>
      </div>
    </div>
  );
};

export default Register;
