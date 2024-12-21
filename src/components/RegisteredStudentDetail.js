import React, { useState } from "react";

const RegisteredStudentDetail = () => {
  const [assignments, setAssignments] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [studentDetails, setStudentDetails] = useState({
    name: "John Doe",
    class: "Mathematics",
    assignmentMarks: 85,
    attendancePercentage: 90,
  });

  // Handle adding an assignment
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const newAssignment = {
      heading: e.target.heading.value,
      uploadDate: e.target.uploadDate.value,
      endDate: e.target.endDate.value,
      file: e.target.file.files[0]?.name || "No file uploaded",
    };
    setAssignments([...assignments, newAssignment]);
    e.target.reset();
  };

  // Handle attendance marking
  const handleMarkAttendance = (date) => {
    setAttendance((prev) => ({
      ...prev,
      [date]: !prev[date], // Toggle attendance
    }));
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Zoom Integration Section */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Integrated Zoom</h2>
        <p className="mb-4">Start or join a class session with your student.</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Start Zoom Meeting
        </button>
      </section>

      {/* Assignment Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Assign Homework</h2>
        <form onSubmit={handleAddAssignment} className="space-y-4">
          <div>
            <label className="block font-medium">Assignment Heading</label>
            <input
              type="text"
              name="heading"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block font-medium">Upload Date</label>
              <input
                type="date"
                name="uploadDate"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">Upload Assignment</label>
            <input type="file" name="file" accept=".docx" className="w-full p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Add Assignment
          </button>
        </form>

        {/* Display Assignments */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Assignments</h3>
          {assignments.length > 0 ? (
            <ul className="list-disc pl-6">
              {assignments.map((assignment, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{assignment.heading}</span> -{" "}
                  Uploaded: {assignment.uploadDate}, End Date: {assignment.endDate}, File:{" "}
                  {assignment.file}
                </li>
              ))}
            </ul>
          ) : (
            <p>No assignments added yet.</p>
          )}
        </div>
      </section>

      {/* Attendance Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Mark Attendance</h2>
        <div className="space-y-4">
          {["2024-12-01", "2024-12-02", "2024-12-03"].map((date) => (
            <div key={date} className="flex items-center space-x-4">
              <span className="font-medium">{date}</span>
              <button
                onClick={() => handleMarkAttendance(date)}
                className={`py-2 px-4 rounded ${
                  attendance[date]
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {attendance[date] ? "Present" : "Absent"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Student Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Student Details</h2>
        <p>
          <span className="font-medium">Name:</span> {studentDetails.name}
        </p>
        <p>
          <span className="font-medium">Class:</span> {studentDetails.class}
        </p>
        <p>
          <span className="font-medium">Assignment Marks:</span>{" "}
          {studentDetails.assignmentMarks}%
        </p>
        <p>
          <span className="font-medium">Attendance Percentage:</span>{" "}
          {studentDetails.attendancePercentage}%
        </p>
      </section>
    </div>
  );
};

export default RegisteredStudentDetail;
