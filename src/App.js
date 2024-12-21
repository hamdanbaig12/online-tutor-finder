import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register";
import TutorDashboard from "./components/TutorDashboard";
import StudentDashboard from "./components/StudentDashboard";
import ParentDashboard from "./components/ParentDashboard";
import TutorCourseDetail from "./components/TutorCourseDetail";
import RegisteredCourseDetail from "./components/RegisteredCourseDetail";
import RegisterParent from "./pages/RegisterParent";
import RegisterTutor from "./pages/RegisterTutor";
import RegisterStudent from "./pages/RegisterStudent";
import RegisteredStudentDetail from "./components/RegisteredStudentDetail";

/* Import Zoom Components */
import ScheduleMeeting from "./components/Zoom/ScheduleMeeting";
import MeetingList from "./components/Zoom/MeetingList";
import MeetingDetails from "./components/Zoom/MeetingDetails";
import JoinMeeting from "./components/Zoom/JoinMeeting";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Registration Pages */}
            <Route path="/register-parent" element={<RegisterParent />} />
            <Route path="/register-tutor" element={<RegisterTutor />} />
            <Route path="/register-student" element={<RegisterStudent />} />

            {/* Dashboards */}
            <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/tutor-course/:id" element={<TutorCourseDetail />} />
            <Route path="/registered-course-detail" element={<RegisteredCourseDetail />} />
            <Route path="/registered-student-detail" element={<RegisteredStudentDetail />} />


            {/* Zoom Integration */}
            <Route path="/zoom/schedule" element={<ScheduleMeeting />} />
            <Route path="/zoom" element={<MeetingList />} />
            <Route path="/zoom/meeting/:id" element={<MeetingDetails />} />
            <Route path="/zoom/join" element={<JoinMeeting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
