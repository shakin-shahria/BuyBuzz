import React, { useState, useEffect } from 'react';
import AppURL from "../../../api/AppURL";

const PaymentDetails = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${AppURL.BASE_URL}${AppURL.GET_ALL_ORDERS}`);
        const data = await response.json();
        setOrders(data); // Store the orders in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading payment details...</p>;
  }

  return (
    <div className="payment-details-cart">
      <h2>Payment Information</h2>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.id} className="order-info">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total Amount:</strong> ${order.total_amount}</p>
            <p><strong>Customer Name:</strong> {order.customer_name}</p>
            {/* Add more fields here depending on your order structure */}
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default PaymentDetails;
