import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../assets/CSS/details.css'; 
import 'react-calendar/dist/Calendar.css';

const MyComponent = () => {
  const [showViewService, setShowViewService] = useState(false);
  const [showBookService, setShowBookService] = useState(false);
  const [showMyBooking, setShowMyBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showUserProfile, setShowUserProfile] = useState(false);

  const userData = {
    userId: 1,
    name: 'Vinoth',
    email: 'Vinoth@gmail.com',
    address: '123 Main St, Cityville',
    gender: 'Male',
    age: 30,
    phoneNumber: '123-456-7890',
  };

  return (
    <>
<div>

</div>


    <div className="dashboard-container">
      <div className="sidebar">
        <button className={showViewService ? 'active' : ''} onClick={() => { setShowViewService(true); setShowBookService(false); setShowMyBooking(false); }}>
          View Service
        </button>
        <button className={showBookService ? 'active' : ''} onClick={() => { setShowViewService(false); setShowBookService(true); setShowMyBooking(false); }}>
          Book Service
        </button>
        <button className={showMyBooking ? 'active' : ''} onClick={() => { setShowViewService(false); setShowBookService(false); setShowMyBooking(true); }}>
          My Booking
        </button>
        <button
  className={showUserProfile ? 'active' : ''}
  onClick={() => {
    setShowViewService(false);
    setShowBookService(false);
    setShowMyBooking(false);
    setShowUserProfile(true);
  }}
>
  User
</button>
      </div>



      <div className="main-content">
     
          {showViewService && (
            <div className="table-container">
              <h2>View Service Table</h2>
              <table className="service-table">
                <thead>
                  <tr>
                    <th>Service ID</th>
                    <th>Service Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Personal Care</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Light Housekeeping</td>
                    <td>$430</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Comapnionship</td>
                    <td>$40</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Comapnionship</td>
                    <td>$140</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>food/Meal</td>
                    <td>$160</td>
                  </tr>
                </tbody>
              </table>
              <h2>Payment Table</h2>
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Service Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Personal Care</td>
                    <td>$50</td>
                    <td>Done</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Personal Care</td>
                    <td>$30</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Travel</td>
                    <td>$40</td>
                    <td>Done</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Medication</td>
                    <td>$40</td>
                    <td>Done</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Travel</td>
                    <td>$40</td>
                    <td>Done</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
 {showBookService && (
          <div className="table-container">
            <h2>Book Service Table</h2>
            <table className="service-table">
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Medication</td>
                <td>$50</td>
                <td><button>New Booking</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Companionship</td>
                <td>$260</td>
                <td><button>New Booking</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>food/Meal</td>
                <td>$330</td>
                <td><button>New Booking</button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Medication</td>
                <td>$160</td>
                <td><button>New Booking</button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Light Housekeeping</td>
                <td>$180</td>
                <td><button>New Booking</button></td>
              </tr>
            </tbody>
            </table>
          </div>
        )}
          {showMyBooking && (
            <div className="table-container">
              <h2>My Booking Table</h2>
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Service Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Personal Care</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>food/Meal</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Light Housekeeping</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Light Housekeeping</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Medication</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Companionship</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
          
              <div className="calendar-container">
                <h2>Appointments Calendar</h2>
                <Calendar
                  onChange={date => setSelectedDate(date)}
                  value={selectedDate}
                />
              </div>
          
              
            </div>
          )}
          
          <div className="center-container">
        
        <div className="user-profile-card">
          <h2>User Profile</h2>
          <div className="user-info">
            {/* <p>
              <strong>User ID:</strong> {userData.userId}
            </p> */}
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Address:</strong> {userData.address}
            </p>
            <p>
              <strong>Gender:</strong> {userData.gender}
            </p>
         
            <p>
              <strong>Age:</strong> {userData.age}
            </p>
            <p>
              <strong>Phone Number:</strong> {userData.phoneNumber}
            </p>
          </div>
          <button className="edit-profile-button" onClick={() => setShowUserProfile(false)}>
            Close Profile
          </button>
        </div>
      
    </div>
      </div>
    </div>
    </>
  );
};

export default MyComponent;
