// src/pages/ParentDashboard.js
import React from 'react';

const ParentDashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Parent Dashboard</h2>
      <div>
        <h3 className="text-2xl font-bold mb-4">Parent Details</h3>
        <p>Name: Jane Doe</p>
        <p>CNIC: 9876543210987</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Child’s Details</h3>
        <p>Name: Jack Doe</p>
        <p>Grade: 10th</p>
        <p>Attendance: 90%</p>
        <p>Assignments: 2 pending</p>
      </div>
    </div>
  );
};

export default ParentDashboard;
