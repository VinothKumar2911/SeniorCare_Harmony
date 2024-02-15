import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    description: '',
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/services', formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Name:
        <input type="text" name="serviceName" value={formData.serviceName} onChange={handleChange} />
      </label>
      <br />

      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />

      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ServiceForm;
