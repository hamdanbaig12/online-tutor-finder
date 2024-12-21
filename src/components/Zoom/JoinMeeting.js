// src/components/Zoom/JoinMeeting.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinMeeting = () => {
  const [meetingId, setMeetingId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/zoom/meeting/${meetingId}`);
  };

  return (
    <div>
      <h1>Join a Zoom Meeting</h1>
      <label>Enter Meeting ID:</label>
      <input
        type="text"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <button onClick={handleJoin}>Join Meeting</button>
    </div>
  );
};

export default JoinMeeting;
