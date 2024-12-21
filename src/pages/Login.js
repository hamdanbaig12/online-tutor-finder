import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tutor"); // Default role is 'tutor'

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted with:", { email, password, role });
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form
        className="bg-gray-100 p-6 rounded shadow"
        onSubmit={handleSubmit}
      >
        {/* Role Selection */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Login As</label>
          <select
            className="w-full border rounded p-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="tutor">Tutor</option>
            <option value="parent">Parent</option>
            <option value="student">Student</option>
          </select>
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
