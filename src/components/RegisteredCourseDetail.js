import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RegisteredCourseDetail = () => {
  const { state: course } = useLocation();
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
    }
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      {/* Course Name Section */}
      <header>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
          onClick={() => navigate(-1)}
        >
          Back to Dashboard
        </button>
        <h2 className="text-4xl font-bold text-blue-600">{course.name}</h2>
        <p className="text-gray-500 text-lg mt-2">Grade: {course.grade}</p>
      </header>

      {/* Zoom Integration Section */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Join Zoom Class</h3>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Join Zoom Meeting
        </button>
      </section>

      {/* Assignments Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Assignments</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <p className="font-semibold">Assignment 1</p>
            <div className="text-sm text-gray-600">
              <p>Upload Date: 2024-12-01</p>
              <p>Last Date: 2024-12-10</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Download
              </button>
              <label className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                Upload
                <input
                  type="file"
                  accept=".docx, .pdf, .ppt, .zip"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Attendance Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Attendance</h3>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Class Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Mathematics</td>
              <td className="border border-gray-300 px-4 py-2">2024-12-01</td>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Present</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Physics</td>
              <td className="border border-gray-300 px-4 py-2">2024-12-02</td>
              <td className="border border-gray-300 px-4 py-2 text-red-600">Absent</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Marks and Remarks Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Marks & Remarks</h3>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Assignment Name</th>
              <th className="border border-gray-300 px-4 py-2">Full Marks</th>
              <th className="border border-gray-300 px-4 py-2">Obtained Marks</th>
              <th className="border border-gray-300 px-4 py-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Assignment 1</td>
              <td className="border border-gray-300 px-4 py-2">100</td>
              <td className="border border-gray-300 px-4 py-2">85</td>
              <td className="border border-gray-300 px-4 py-2">Excellent</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Assignment 2</td>
              <td className="border border-gray-300 px-4 py-2">50</td>
              <td className="border border-gray-300 px-4 py-2">40</td>
              <td className="border border-gray-300 px-4 py-2">Good</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RegisteredCourseDetail;
