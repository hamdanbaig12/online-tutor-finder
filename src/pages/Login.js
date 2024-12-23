import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for route navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("parent"); // Default role is 'parent'
  const navigate = useNavigate(); // Hook for navigating to different routes

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the login data object
    const loginData = {
      email,
      password,
      role,
    };

    try {
      // Send login request to the backend
      const response = await fetch("http://127.0.0.1:8000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        // Check if the role of the email from the response matches the selected role
        if (result.role === role) {
          console.log('result: ', result);
          // Save user details in session storage
          sessionStorage.setItem("result", JSON.stringify(result));
          sessionStorage.setItem("father", result.parentName);
          sessionStorage.setItem("parentCNIC", result.parentCNIC);
          sessionStorage.setItem("childName", result.childName);
          sessionStorage.setItem("grade", result.grade);
          sessionStorage.setItem("attendance", result.attendance);
          sessionStorage.setItem("assignmentMarks", JSON.stringify(result.assignmentMarks));

          // Navigate to the corresponding route based on the role
          if (role === "teacher") {
            navigate("/tutor-dashboard"); // Redirect to tutor dashboard
          } else if (role === "student") {
            navigate("/student-dashboard"); // Redirect to student dashboard
          } else if (role === "parent") {
            navigate("/parent-dashboard"); // Redirect to parent dashboard
          }
        } else {
          
          console.log('role: ', role);
          alert("The role you selected does not match the account's role.");
        }
      } else {
        alert(result.message || "Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login!");
    }
  };

  return (
    <div className="flex justify-center items-center h-[82.6vh] bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Login As</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
