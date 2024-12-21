// src/components/Zoom/MeetingList.js
import React, { useState, useEffect } from "react";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch("/api/meetings");
      const data = await response.json();
      setMeetings(data);
    };

    fetchMeetings();
  }, []);

  return (
    <div>
      <h1>Scheduled Meetings</h1>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <h3>{meeting.topic}</h3>
            <p>Start Time: {new Date(meeting.start_time).toLocaleString()}</p>
            <a href={`/zoom/meeting/${meeting.id}`}>View Details</a>
            <br />
            <a href={meeting.join_url} target="_blank" rel="noopener noreferrer">
              Join Meeting
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
