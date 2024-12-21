// src/components/Zoom/ScheduleMeeting.js
import React, { useState } from "react";

const ScheduleMeeting = () => {
  const [topic, setTopic] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(60); // Default duration
  const [joinUrl, setJoinUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/meetings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        start_time: startTime,
        duration,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setJoinUrl(data.join_url);
      alert(`Meeting scheduled! Join URL: ${data.join_url}`);
    } else {
      alert(`Error scheduling meeting: ${data.error}`);
    }
  };

  return (
    <div>
      <h1>Schedule a Zoom Meeting</h1>
      <form onSubmit={handleSubmit}>
        <label>Topic:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <br />
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <br />
        <label>Duration (in minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <br />
        <button type="submit">Schedule Meeting</button>
      </form>
      {joinUrl && <p>Join URL: <a href={joinUrl} target="_blank" rel="noopener noreferrer">Join</a></p>}
    </div>
  );
};

export default ScheduleMeeting;
