import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarImage from "../Pictures/file.png";

const result = JSON.parse(sessionStorage.getItem('result'));

const StudentDashboard = () => {
  const [registeredCourses, setRegisteredCourses] = useState([
    { id: 101, name: "Biology 201", grade: "10th", description: "Advanced Biology for high school." },
    { id: 102, name: "Chemistry 202", grade: "11th", description: "Learn the fundamentals of Chemistry." },
    { id: 103, name: "Physics 303", grade: "12th", description: "Deep dive into Physics concepts." },
  ]);

  const [availableCourses] = useState([
    { id: 1, name: "Science 101", grade: "9th", description: "Learn the basics of Science." },
    { id: 2, name: "Mathematics 102", grade: "10th", description: "Master advanced math skills." },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const student = {
    name: "John Doe",
    fatherName: "Richard Roe",
    contact: "123-456-7890",
    profilePicture: null, // Default profile picture
    avatar: <img src={avatarImage} alt="Student Avatar" className="w-[20vh] h-[20vh]" />, 
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
    <div className="container mx-auto py-10 px-4">
      {/* Top Section: Student Details */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-lg p-6 mb-10 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <label className="block cursor-pointer">
              {/* <img
                src={student.profilePicture || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover mx-auto shadow-md"
                onClick={() => document.getElementById("profilePictureInput").click()}
              /> */}
              <input
                id="profilePictureInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </label>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold mb-2">{result.username}</h3>
            <p className="text-xl">Email: <span className="font-medium">{result.email}</span></p>
            <p className="text-xl">Contact: <span className="font-medium">{result.contact}</span></p>
          </div>
          <div>{student.avatar}</div>
        </div>
      </div>

    

      {/* Registered Courses Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Registered Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registeredCourses.map((course, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              <h4 className="text-xl font-bold mb-2">{course.name}</h4>
              <p className="text-gray-600">Grade: {course.grade}</p>
            </div>
            
          ))}
        </div>

        
          {/* Available Courses Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Available Courses</h3>
        <input
          type="text"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="border p-4 rounded shadow hover:shadow-lg transition-all"
            >
              <h4 className="text-xl font-bold mb-2">{course.name}</h4>
              <p className="text-gray-600">Grade: {course.grade}</p>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleRegisterCourse(course)}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
