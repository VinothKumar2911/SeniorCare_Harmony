import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/CSS/Testimonial.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', message: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []); 

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const addTestimonial = async () => {
    try {
      await axios.post('http://localhost:8080/api/testimonials', newTestimonial);
      fetchTestimonials();
      setShowForm(false);
      setNewTestimonial({ name: '', message: '', email: '' }); 
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  const deleteTestimonial = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/testimonials/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      <h3>Testimonials</h3>
      <button className="add-testimonial-button" onClick={() => setShowForm(true)}>Add Testimonial</button>
      {showForm && (
        <div className="testimonial-form">
          <h4>Add Testimonial</h4>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={newTestimonial.name} onChange={handleInputChange} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={newTestimonial.message} onChange={handleInputChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={newTestimonial.email} onChange={handleInputChange} />
          <button onClick={addTestimonial}>Submit</button>
        </div>
      )}
      <div className="table-container">
        <table className="testimonials-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>Email</th>
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td>{testimonial.name}</td>
                <td>{testimonial.message}</td>
                <td>{testimonial.email}</td>
                <td>
                  <button onClick={() => deleteTestimonial(testimonial.id)}>Delete</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testimonials;
