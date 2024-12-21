import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RegisteredCourseDetail = () => {
  const { state: course } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Course Details</h2>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => navigate(-1)}
        >
          Back to Dashboard
        </button>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
          <p className="text-gray-700">Grade: {course.grade}</p>
        </div>

        {/* Zoom Integration Section */}
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Zoom Integration</h4>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Join Class
          </button>
        </div>

        {/* Assignments Section */}
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Upcoming Assignments</h4>
          <p>No assignments uploaded yet.</p>
        </div>

        {/* Attendance Section */}
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Attendance</h4>
          <p>Your attendance: 90%</p>
        </div>

        {/* Marks and Remarks Section */}
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Marks & Remarks</h4>
          <p>No marks or remarks yet.</p>
        </div>

        {/* Uploaded Class Videos */}
        <div>
          <h4 className="text-xl font-bold mb-2">Uploaded Class Videos</h4>
          <p>No videos uploaded yet.</p>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCourseDetail;
