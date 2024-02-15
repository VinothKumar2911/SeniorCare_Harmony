import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import '../assets/CSS/Booking.css';

const BookingManagement = () => {
  // Define state to store bookings data
  const [bookings, setBookings] = useState([]);

  // Function to fetch bookings data from backend
  const fetchBookings = async () => {
    try {
      // Make GET request to fetch bookings data
      const response = await axios.get('http://localhost:8080/api/bookings');
      // Update state with fetched data
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  // Fetch bookings data when component mounts
  useEffect(() => {
    fetchBookings();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="section">
      <h3>Booking Management</h3>
      <div className="action-buttons">
        <button className="action-button">View All Bookings</button>
        {/* <button className="action-button">View Completed Bookings</button>
        <button className="action-button">View Pending Bookings</button> */}
      </div>
      <div className="table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Date</th>
              <th>Service</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.time}</td>
                <td>{booking.date}</td>
                <td>{booking.service}</td>
                <td>{booking.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
