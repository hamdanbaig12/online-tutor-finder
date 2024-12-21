import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    cnic: "1234567890123",
    contact: "+92-300-1234567",
    email: "johndoe@example.com",
    specialty: "Mathematics",
    profilePic: null,
  });
  const [courses, setCourses] = useState([]);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    grade: "",
    description: "",
    pdf: null,
    video: null,
  });

  const navigate = useNavigate();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfile({ ...profile, profilePic: URL.createObjectURL(file) });
  };

  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
    setNewCourse({ name: "", grade: "", description: "", pdf: null, video: null });
    setShowCourseForm(false);
  };

  return (
    <div className="container mx-auto py-10">
      {/* Tutor Profile Section */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <div className="flex items-center">
          <div className="relative cursor-pointer">
            <img
              src={profile.profilePic || "https://via.placeholder.com/100"}
              alt="Tutor Profile"
              className="rounded-full w-24 h-24 border border-gray-300"
              onClick={() => document.getElementById("profilePicInput").click()}
            />
            <input
              type="file"
              id="profilePicInput"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p>CNIC: {profile.cnic}</p>
            <p>Contact: {profile.contact}</p>
            <p>Email: {profile.email}</p>
            <p>Specialty: {profile.specialty}</p>
          </div>
        </div>
      </div>

      {/* Add Course Section */}
      <div className="mb-6">
        <button
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          onClick={() => setShowCourseForm(true)}
        >
          Add Course
        </button>
      </div>

      {showCourseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-red-500 font-bold text-lg"
              onClick={() => setShowCourseForm(false)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Add Course</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCourse();
              }}
            >
              <div className="mb-4">
                <label className="block font-bold mb-2">Course Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Course Grade</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={newCourse.grade}
                  onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Course Description</label>
                <textarea
                  className="w-full p-2 border rounded"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Upload PDF</label>
                <input
                  type="file"
                  className="w-full"
                  onChange={(e) => setNewCourse({ ...newCourse, pdf: e.target.files[0] })}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Upload Demo Video</label>
                <input
                  type="file"
                  className="w-full"
                  onChange={(e) => setNewCourse({ ...newCourse, video: e.target.files[0] })}
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Course
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Added Courses Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Your Courses</h3>
        {courses.length > 0 ? (
          <ul className="bg-white p-4 rounded shadow-md">
            {courses.map((course) => (
              <li
                key={course.id}
                className="mb-4 p-4 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/tutor-course/${course.id}`, { state: course })}
              >
                <h4 className="text-xl font-bold">{course.name}</h4>
                <p>Grade: {course.grade}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TutorDashboard;
