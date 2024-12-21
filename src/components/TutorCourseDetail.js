import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TutorCourseDetail = () => {
  const { state: course } = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState(course);
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Updated Course Data:", updatedCourse);
    alert("Course updated successfully!");
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      alert("Course deleted successfully!");
      navigate(-1);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{updatedCourse.name}</h2>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => navigate(-1)}
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Course Details */}
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Course Name</h4>
          {isEditing ? (
            <input
              type="text"
              className="w-full p-3 border rounded"
              value={updatedCourse.name}
              onChange={(e) => setUpdatedCourse({ ...updatedCourse, name: e.target.value })}
            />
          ) : (
            <p className="text-gray-700">{updatedCourse.name}</p>
          )}
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Grade</h4>
          {isEditing ? (
            <input
              type="text"
              className="w-full p-3 border rounded"
              value={updatedCourse.grade}
              onChange={(e) => setUpdatedCourse({ ...updatedCourse, grade: e.target.value })}
            />
          ) : (
            <p className="text-gray-700">{updatedCourse.grade}</p>
          )}
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Description</h4>
          {isEditing ? (
            <textarea
              className="w-full p-3 border rounded"
              value={updatedCourse.description}
              onChange={(e) =>
                setUpdatedCourse({ ...updatedCourse, description: e.target.value })
              }
            ></textarea>
          ) : (
            <p className="text-gray-700">{updatedCourse.description}</p>
          )}
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">PDF</h4>
          {isEditing ? (
            <input
              type="file"
              accept=".pdf"
              className="w-full p-3 border rounded"
              onChange={(e) =>
                setUpdatedCourse({ ...updatedCourse, pdf: e.target.files[0] })
              }
            />
          ) : updatedCourse.pdf ? (
            <a
              href={URL.createObjectURL(updatedCourse.pdf)}
              download
              className="text-blue-500 underline"
            >
              Download PDF
            </a>
          ) : (
            <p className="italic text-gray-500">No PDF uploaded</p>
          )}
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Demo Video</h4>
          {isEditing ? (
            <input
              type="file"
              accept="video/*"
              className="w-full p-3 border rounded"
              onChange={(e) =>
                setUpdatedCourse({ ...updatedCourse, video: e.target.files[0] })
              }
            />
          ) : updatedCourse.video ? (
            <video controls className="w-full mb-4" src={URL.createObjectURL(updatedCourse.video)} />
          ) : (
            <p className="italic text-gray-500">No video uploaded</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          {isEditing ? (
            <>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                onClick={() => setIsEditing(true)}
              >
                Edit Course
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete Course
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorCourseDetail;
