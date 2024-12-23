import React, { use, useEffect, useState } from "react";

const ParentDashboard = () => {
  // Retrieve data from sessionStorage
  const parentName = sessionStorage.getItem("parentName");
  const userName = sessionStorage.getItem("username");
  const parentCNIC = sessionStorage.getItem("parentCNIC");
  const childName = sessionStorage.getItem("childName");
  const grade = sessionStorage.getItem("grade");
  const attendance = sessionStorage.getItem("attendance");
  const assignmentMarks = sessionStorage.getItem("assignmentMarks");
  const result = JSON.parse(sessionStorage.getItem('result'));

  // Function to safely parse JSON or return null if undefined or invalid
  const parseJSON = (data) => {
    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {

  }, []);

  // Safely parse assignmentMarks
  const parsedAssignmentMarks = parseJSON(assignmentMarks);

  const getAttendanceColor = (value) => {
    if (value >= 75) return "bg-green-500"; // Green for high attendance
    if (value >= 50) return "bg-yellow-500"; // Yellow for medium attendance
    return "bg-red-500"; // Red for low attendance
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Parent Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-6 rounded-lg shadow-lg text-center mb-8">
        <h2 className="text-4xl font-extrabold">Parent Dashboard</h2>
      </div>

      {/* Parent Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb/-4 text-gray-800">Parent Details</h3>
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {result.username || "Not available"}
        </p>
        <p className="text-lg">
          <span className="font-semibold">CNIC:</span> {result.cnic || "Not available"}
        </p>
      </div>

      {/* Child’s Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Child’s Details</h3>
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {childName || "Not available"}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Grade:</span> {grade || "Not available"}
        </p>

        {/* Attendance Section */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2 text-gray-800">Attendance</h4>
          <div className="relative w-full h-6 rounded-lg bg-gray-300 overflow-hidden shadow-inner">
            <div
              className={`absolute h-full ${getAttendanceColor(attendance ? attendance : 0)}`}
              style={{ width: `${attendance ? attendance : 0}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-lg">
            {attendance ? `${attendance}% attendance` : "No attendance data"}
          </p>
        </div>

        {/* Assignments Section */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2 text-gray-800">Assignments</h4>
          <p className="text-lg">
            <span className="font-semibold">Status:</span> {parsedAssignmentMarks ? parsedAssignmentMarks.length : 0} pending
          </p>
        </div>
      </div>

      {/* Assignment Marks Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Assignment Marks</h3>
        {parsedAssignmentMarks === null ? (
          <p className="text-lg text-center text-gray-500">No assignment available</p>
        ) : parsedAssignmentMarks.length === 0 ? (
          <p className="text-lg text-center text-gray-500">No assignments marked yet</p>
        ) : (
          <ul>
            {parsedAssignmentMarks.map((assignment, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b last:border-b-0"
              >
                <span className="text-lg font-medium">{assignment.name}</span>
                <span className="text-lg font-semibold text-blue-500">{assignment.marks} / 100</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
