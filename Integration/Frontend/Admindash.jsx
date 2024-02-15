



import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser } from 'react-icons/hi';
import ServiceManagement from './Services';
import BookingManagement from './Booking';
import PaymentHistory from './Payment';
import Feedback from './feedback';
import Charts from './Charts'; 
import Test from './Testimonial'; 
import '../assets/CSS/Admindash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Admindash = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/');};



  return (
    <div className="admin-container">
      <Sidebar className="sidebar" aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} labelColor="dark">
              View Services
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              All Booking
            </Sidebar.Item>
            {/* <Sidebar.Item href="#" icon={HiUser}>
              Payment 
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="main-content">
        <div className="header">
          <h2>Admin Dashboard</h2>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          </div>

        <Charts />

        <ServiceManagement />

        <BookingManagement />

        {/* <PaymentHistory /> */}
        
        <Feedback/>
        <Test/>

  
      </div>
    </div>
  );
};

export default Admindash;
