import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RegisteredStudentDetail = () => {
  const [assignments, setAssignments] = useState([]);
  const [studentSubmissions, setStudentSubmissions] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    classNumber: "",
    topic: "",
    date: "",
    status: "A", // Default to absent
  });

  const [newAssignment, setNewAssignment] = useState({
    heading: "",
    uploadDate: "",
    endDate: "",
    file: null,
  });

  const [gradingData, setGradingData] = useState({
    fullMarks: "",
    obtainedMarks: "",
  });

  const [studentDetails] = useState({
    assignmentMarks: 85, // Percentage
    attendancePercentage: 90, // Percentage
  });

  // Chart data and options
  const chartData = {
    labels: ["Assignment Marks", "Attendance Percentage"],
    datasets: [
      {
        label: "Percentage",
        data: [studentDetails.assignmentMarks, studentDetails.attendancePercentage],
        backgroundColor: ["#4caf50", "#2196f3"],
        borderColor: ["#3e8e41", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  // Handle adding an assignment
  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (
      newAssignment.heading &&
      newAssignment.uploadDate &&
      newAssignment.endDate &&
      newAssignment.file
    ) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment({ heading: "", uploadDate: "", endDate: "", file: null });
    }
  };

  // Handle student assignment grading
  const handleGradeAssignment = (index, e) => {
    e.preventDefault();
    const updatedSubmissions = [...studentSubmissions];
    updatedSubmissions[index].grading = {
      fullMarks: gradingData.fullMarks,
      obtainedMarks: gradingData.obtainedMarks,
    };
    setStudentSubmissions(updatedSubmissions);
    setGradingData({ fullMarks: "", obtainedMarks: "" });
  };

  // Handle adding a new attendance record
  const handleAddAttendance = (e) => {
    e.preventDefault();
    if (
      newAttendance.classNumber &&
      newAttendance.topic &&
      newAttendance.date
    ) {
      setAttendance([...attendance, newAttendance]);
      setNewAttendance({ classNumber: "", topic: "", date: "", status: "A" });
    }
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
              value={newAssignment.heading}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, heading: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block font-medium">Upload Date</label>
              <input
                type="date"
                value={newAssignment.uploadDate}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    uploadDate: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                value={newAssignment.endDate}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    endDate: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">Upload Assignment</label>
            <input
              type="file"
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  file: e.target.files[0]?.name,
                })
              }
              accept=".docx,.pdf,.ppt,.zip"
              required
              className="w-full p-2 border rounded"
            />
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
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Mark Attendance</h2>
        <form onSubmit={handleAddAttendance} className="space-y-4">
          <div className="flex space-x-4">
            <div>
              <label className="block font-medium">Class Number</label>
              <input
                type="text"
                value={newAttendance.classNumber}
                onChange={(e) =>
                  setNewAttendance({
                    ...newAttendance,
                    classNumber: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Topic</label>
              <input
                type="text"
                value={newAttendance.topic}
                onChange={(e) =>
                  setNewAttendance({
                    ...newAttendance,
                    topic: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Date</label>
              <input
                type="date"
                value={newAttendance.date}
                onChange={(e) =>
                  setNewAttendance({
                    ...newAttendance,
                    date: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Status</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attendanceStatus"
                    value="P"
                    checked={newAttendance.status === "P"}
                    onChange={(e) =>
                      setNewAttendance({
                        ...newAttendance,
                        status: e.target.value,
                      })
                    }
                    className="mr-2"
                  />
                  Present (P)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attendanceStatus"
                    value="A"
                    checked={newAttendance.status === "A"}
                    onChange={(e) =>
                      setNewAttendance({
                        ...newAttendance,
                        status: e.target.value,
                      })
                    }
                    className="mr-2"
                  />
                  Absent (A)
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Add Attendance
          </button>
        </form>

        {/* Display Attendance Records */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Attendance Records</h3>
          {attendance.length > 0 ? (
            <table className="table-auto w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Class Number</th>
                  <th className="border px-4 py-2">Topic</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((record, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{record.classNumber}</td>
                    <td className="border px-4 py-2">{record.topic}</td>
                    <td className="border px-4 py-2">{record.date}</td>
                    <td className="border px-4 py-2">
                      {record.status === "P" ? "Present" : "Absent"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No attendance records added yet.</p>
          )}
        </div>
      </section>

      {/* Student Performance Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Student Performance</h2>
        <div className="h-96">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </section>
    </div>
  );
};

export default RegisteredStudentDetail;
