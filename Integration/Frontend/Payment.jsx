

import React from 'react';
import '../assets/CSS/Payment.css'
const PaymentHistory = () => {

  const payments = [
    { id: 1, customerName: 'John Doe', amount: 100, status: 'Paid' },
    { id: 2, customerName: 'Jane Smith', amount: 150, status: 'Pending' },
    { id: 3, customerName: 'Emily Johnson', amount: 340, status: 'Paid' },
    { id: 4, customerName: 'Ava Davis', amount: 170, status: 'Paid' },
    { id: 5, customerName: 'Michael Rodriguez', amount: 220, status: 'Pending' },
    { id: 6, customerName: 'Noah Martinez', amount: 50, status: 'Paid' },
   
  ];

  return (
    <div className="section">
      <h3>Payment History</h3>
      <button className="action-button">View Payment History</button>
      <div className="table-container">
        <table className="payment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.customerName}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
