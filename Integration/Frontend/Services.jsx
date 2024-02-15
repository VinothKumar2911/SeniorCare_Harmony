import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/CSS/Services.css';
import ServiceForm from '../pages/serviceadd.jsx'; 

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [editServiceData, setEditServiceData] = useState({ id: '', serviceName: '', description: '', price: '' });
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isNewServiceFormOpen, setIsNewServiceFormOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleEditButtonClick = async (service) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/services/${service.id}`);
      setEditServiceData(response.data);
      setIsEditFormOpen(true);
    } catch (error) {
      console.error('Error fetching service details for editing:', error);
    }
  };

  const handleDeleteButtonClick = async (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await axios.delete(`http://localhost:8080/api/services/${serviceId}`);
        fetchServices(); 
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditServiceData({ ...editServiceData, [name]: value });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/services/${editServiceData.id}`, editServiceData);
      fetchServices();
      setIsEditFormOpen(false);
    } catch (error) {
      console.error('Error editing service:', error);
    }
  };

  const handleAddServiceClick = () => {
    setIsNewServiceFormOpen(true);
  };

  const handleCloseNewServiceForm = () => {
    setIsNewServiceFormOpen(false);
  };

  return (
    <div className="section">
      <h3>Service Management</h3>
      <div className="action-buttons">
        <button className="action-button" onClick={handleAddServiceClick}>Add Service</button>
      </div>
      <div className="table-container">
        <table className="service-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.serviceName}</td>
                <td>{service.description}</td>
                <td>${service.price}</td>
                <td>
                  <button onClick={() => handleEditButtonClick(service)}>Edit</button>
                  <p></p>
                  <button onClick={() => handleDeleteButtonClick(service.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditFormOpen && (
        <div className="popup-form">
          <h3>Edit Service</h3>
          <form onSubmit={handleEditFormSubmit}>
            <input type="text" name="serviceName" value={editServiceData.serviceName} onChange={handleInputChange} />
            <input type="text" name="description" value={editServiceData.description} onChange={handleInputChange} />
            <input type="number" name="price" value={editServiceData.price} onChange={handleInputChange} />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
      {isNewServiceFormOpen && (
        <div className="popup-form">
          <h3>Add New Service</h3>
          <ServiceForm onClose={handleCloseNewServiceForm} />
        </div>
      )}
    </div>
  );
};

export default ServiceManagement;
