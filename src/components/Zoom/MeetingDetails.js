// src/components/Zoom/MeetingDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MeetingDetails = () => {
  const { id } = useParams();
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      const response = await fetch(`/api/meetings/${id}`);
      const data = await response.json();
      setMeeting(data);
    };

    fetchMeetingDetails();
  }, [id]);

  if (!meeting) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{meeting.topic}</h1>
      <p>Start Time: {new Date(meeting.start_time).toLocaleString()}</p>
      <p>Duration: {meeting.duration} minutes</p>
      <a href={meeting.join_url} target="_blank" rel="noopener noreferrer">
        Join Meeting
      </a>
    </div>
  );
};

export default MeetingDetails;
