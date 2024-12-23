import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarImage from "../Pictures/file.png";

const result = JSON.parse(sessionStorage.getItem('result'));

const TutorDashboard = () => {
  const [profile, setProfile] = useState({
    name: "Jane Smith",
    cnic: "9876543210123",
    contact: "+92-300-9876543",
    email: "janesmith@example.com",
    specialty: "Physics",
    profilePic: null,
    avatar: <img src={avatarImage} alt="Tutor Avatar" className="w-[20vh] h-[20vh]" />, // Avatar added here
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
    <div className="container mx-auto py-10 px-4">
      {/* Top Section: Tutor Profile */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-lg p-6 mb-10 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <label className="block cursor-pointer">
              {/* <img
                src={profile.profilePic || "https://via.placeholder.com/150"}
                alt="Tutor Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover mx-auto shadow-md"
                onClick={() => document.getElementById("profilePicInput").click()}
              /> */}
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold mb-2">{result.username}</h3>
            <p className="text-xl">CNIC: <span className="font-medium">{result.cnic}</span></p>
            <p className="text-xl">Contact: <span className="font-medium">{result.contact}</span></p>
            <p className="text-xl">Email: <span className="font-medium">{result.email}</span></p>
            {/* <p className="text-xl">Specialty: <span className="font-medium">{profile.specialty}</span></p> */}
          </div>
          {/* Avatar */}
          <div>{profile.avatar}</div>
        </div>
      </div>

      {/* Add Course Section */}
      <div className="mb-10">
        <button
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          onClick={() => setShowCourseForm(true)}
        >
          Add Course
        </button>
      </div>

      {showCourseForm && (
        <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Your Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="border p-4 rounded shadow hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate(`/tutor-course/${course.id}`, { state: course })}
              >
                <h4 className="text-xl font-bold mb-2">{course.name}</h4>
                <p>Grade: {course.grade}</p>
              </div>
            ))
          ) : (
            <p>No courses added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
 