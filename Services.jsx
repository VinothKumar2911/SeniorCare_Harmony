
// import React from 'react';

// const Service = () => {
//   return (
//     <div className="section">
//       <h3>Service Management</h3>
//       <button className="action-button">Add Service</button>
//       <button className="action-button">View Services</button>
//       <button className="action-button">Edit Service</button>
//       <button className="action-button">Delete Service</button>
//     </div>
//   );
// };

// export default Service;




import React from 'react';
import '../assets/CSS/Services.css'
const ServiceManagement = () => {
  const services = [
    { id: 1, serviceName: 'Personal Care', description: 'Personal care involves assistance with activities related to personal hygiene and grooming. This includes tasks such as bathing, dressing, grooming, and maintaining overall personal well-being.', price: 100 },
    { id: 2, serviceName: 'Medication', description: 'Medication management services ensure that individuals take their prescribed medications as directed. This includes organizing medications, providing reminders, and overseeing the proper administration of drugs.', price: 150 },
    { id: 3, serviceName: 'Travel', description: 'Travel assistance services support individuals in getting to and from various locations. This may involve transportation to medical appointments, social events, grocery shopping, or any other necessary travel.', price: 170 },
    { id: 4, serviceName: 'Light Housekeeping', description: 'Light housekeeping services focus on maintaining a clean and organized living environment. Caregivers assist with light household chores, such as dusting, sweeping, vacuuming, and other tasks that contribute to a comfortable and hygienic home.', price: 200 },
    { id: 5, serviceName: 'food/Meal', description: 'Food and meal preparation services involve planning and cooking nutritious meals based on dietary needs and preferences. Caregivers can assist with meal planning, grocery shopping, and preparing well-balanced meals for individuals.', price: 120 },
    { id: 6, serviceName: 'Companionship', description: 'Companionship services provide emotional and social support to individuals. Caregivers engage in conversation, accompany individuals to social activities, and offer companionship to combat feelings of loneliness or isolation.', price: 350 },
  ];

  return (
    <div className="section">
      <h3>Service Management</h3>
      <div className="action-buttons">
        <button className="action-button">Add Service</button>
        <button className="action-button">View Services</button>
        <button className="action-button">Edit Service</button>
        <button className="action-button">Delete Service</button>
      </div>
      <div className="table-container">
        <table className="service-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.serviceName}</td>
                <td>{service.description}</td>
                <td>${service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceManagement;
