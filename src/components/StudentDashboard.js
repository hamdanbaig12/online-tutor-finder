import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarImage from "../Pictures/file.png";


const StudentDashboard = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [availableCourses] = useState([
    { id: 1, name: "Science 101", grade: "9th", description: "Learn the basics of Science." },
    { id: 2, name: "Mathematics 102", grade: "10th", description: "Master advanced math skills." },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const student = {
    name: "John Doe",
    fatherName: "Richard Roe",
    contact: "123-456-7890",
    profilePicture: null, // Set default profile picture here
    avatar: <img src={avatarImage} alt="Student Avatar" className="w-16 h-16" />
    ,
  };
  const navigate = useNavigate();

  const handleRegisterCourse = (course) => {
    setRegisteredCourses([...registeredCourses, course]);
    alert(`${course.name} has been registered successfully!`);
  };

  const handleCourseClick = (course) => {
    navigate("/registered-course-detail", { state: course });
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files.length > 0) {
      alert("Profile picture updated successfully!");
    }
  };

  const filteredCourses = availableCourses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      {/* Top Section: Student Details */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <label className="block cursor-pointer">
            <img
              src={student.profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border border-gray-300 object-cover"
              onClick={() => document.getElementById("profilePictureInput").click()}
            />
            <input
              id="profilePictureInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
          </label>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">{student.name}</h3>
          <p className="text-gray-700">Father's Name: {student.fatherName}</p>
          <p className="text-gray-700">Contact: {student.contact}</p>
        </div>
        <div className="text-4xl">{student.avatar}</div>
      </div>

      {/* Available Courses Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Available Courses</h3>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredCourses.map((course) => (
            <li key={course.id} className="mb-4">
              <div className="border p-4 rounded shadow hover:shadow-lg">
                <h4 className="text-xl font-bold">{course.name}</h4>
                <p className="text-gray-600">Grade: {course.grade}</p>
                <p className="text-gray-700 mb-2">{course.description}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleRegisterCourse(course)}
                >
                  Register
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Registered Courses Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Registered Courses</h3>
        <ul>
          {registeredCourses.map((course, index) => (
            <li key={index} className="mb-4">
              <div
                className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
                onClick={() => handleCourseClick(course)}
              >
                <h4 className="text-xl font-bold">{course.name}</h4>
                <p className="text-gray-600">Grade: {course.grade}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;


