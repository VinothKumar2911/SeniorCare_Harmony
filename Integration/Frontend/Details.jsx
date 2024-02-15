import React, { useState, useEffect  } from 'react';
import Calendar from 'react-calendar';
import '../assets/CSS/details.css'; 
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { selectUser,logout } from './reducer';
import axios from 'axios';
import '../services/Service.jsx';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';


const MyComponent = () => {
  const [showViewService, setShowViewService] = useState(false);
  const [showBookService, setShowBookService] = useState(false);
  const [showMyBooking, setShowMyBooking] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const userEmail = useSelector(selectUser);
  const dispatch = useDispatch();

 
 
//  const userData = {
//   userId: 1,
//   name: 'Vinoth',
//   email: 'Vinoth@gmail.com',
//   address: '123 Main St, Cityville',
//   gender: 'Male',
//   age: 30,
//   phoneNumber: '123-456-7890',
// };




  const [showUserProfile, setShowUserProfile] = useState(true); 



  const [services, setServices] = useState([]);

  useEffect(() => {
    let mounted = true; 
  
    axios.get('http://localhost:8080/api/services') 
      .then(response => {
        if (mounted) { 
          if (Array.isArray(response.data)) {
            setServices(response.data);
          } else {
            console.error('Data fetched is not an array:', response.data);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  


    return () => {
      mounted = false;
    };
  }, []);
  
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const userEmail = useSelector(selectUser);
  const [userData, setUserData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);



//   useEffect(() => {
//     const fetchBookings = async () => {
//         try {
//             if (!userEmail || !userEmail.email) {
//                 console.error('User email is null or undefined.');
//                 return;
//             }

//             const response = await axios.get(`http://localhost:8080/api/bookings`);
//             const filteredBookings = response.data.filter(booking => booking.email === userEmail.email);
//             setBookings(filteredBookings);
//         } catch (error) {
//             console.error('Error fetching bookings:', error);
//         }
//     };

//     fetchBookings();
// }, [userEmail]);
useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  fetchBookings();
}, []);


const handleLogout = () => {
  dispatch(logout());
  window.location.href = '/';
};

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user') 
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUserData();
}, []);






const handleSearch = () => {
  const filtered = bookings.filter(booking => String(booking.phone).includes(searchTerm));
  setFilteredBookings(filtered);
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
                 <th>Service Name</th>
                 <th>Description</th>
                 <th>Price</th>
               </tr>
             </thead>
             <tbody>
               {services.map(service => (
                 <tr key={service.id}>
                   <td>{service.serviceName}</td>
                   <td>{service.description}</td>
                   <td>{service.price}</td>
                 </tr>
               ))}
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
                <td><Link to="http://localhost:5173/services"><button>New Booking</button></Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Companionship</td>
                <td>$260</td>
                <td><Link to="http://localhost:5173/services"><button>New Booking</button></Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>food/Meal</td>
                <td>$330</td>
                <td><Link to="http://localhost:5173/services"><button>New Booking</button></Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Medication</td>
                <td>$160</td>
                <td><Link to="http://localhost:5173/services"><button>New Booking</button></Link></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Light Housekeeping</td>
                <td>$180</td>
                <td><Link to="http://localhost:5173/services"><button>New Booking</button></Link></td>
              </tr>
            </tbody>
            </table>
          </div>
        )}
          {showMyBooking && (
            <div className="table-container">
                <div className="search-container">
        <input
            type="text"
            placeholder="Search by phone number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
            <h2>My Booking Table</h2>
            <table className="booking-table">
              <thead>
                <tr>
                  
                  <th>Service Name</th>
                  <th>date</th>
                  <th>time</th>
                  <th>phone</th>
                  <th>address</th>
                </tr>
              </thead>
             
                <tbody>
                  {filteredBookings.map(booking => (
                    <tr key={booking.id}>
                      <td>{booking.service}</td>
                      <td>{booking.date}</td>
                      <td>{booking.time}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.address}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
            <h2>Booking Table</h2>
            <table className="booking-table">
              <thead>
                <tr>
                  
                  <th>Service Name</th>
                  <th>date</th>
                  <th>time</th>
                  <th>phone</th>
                  <th>address</th>
                </tr>
              </thead>
             
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id}>
                   
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.address}</td>
                  </tr>
                ))}
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
          <p>
        <h2>USER DASH</h2>
The user dashboard serves as a personalized command center, offering users a seamless experience to manage their account details, track activities, and interact with the platform's features. It's a hub where users can effortlessly navigate<br></br> through their profile settings, 
view recent transactions or bookings, and access important notifications and updates</p>
<h2>Email:</h2>
        {userData ? ( 
          <div className="user-info">
             
            {/* <p>
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
            </p> */}
          </div>
        ) : (
          
          <h3>{userEmail.username}</h3>
        )}
        <button className="edit-profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
    </div>
      </div>
    </div>
    
  
    </>
  );
};

export default MyComponent;