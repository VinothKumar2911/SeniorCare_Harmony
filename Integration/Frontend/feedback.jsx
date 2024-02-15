import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/CSS/feedback.css';

const UserFeedback = () => {
  // Define state to store feedback data
  const [feedbacks, setFeedbacks] = useState([]);

  // Function to fetch feedback data from backend
  const fetchFeedbacks = async () => {
    try {
      // Make GET request to fetch feedback data
      const response = await axios.get('http://localhost:8080/api/feedbacks');
      // Update state with fetched data
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  // Fetch feedback data when component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="section">
      <h3>User Feedback</h3>
      <div className="table-container">
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeedback;
