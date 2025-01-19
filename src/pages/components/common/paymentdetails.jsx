import React, { useState, useEffect } from "react";
import AppURL from "../../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestOrder = async () => {
      try {
        const response = await axios.get(AppURL.GET_ALL_ORDERS);

        if (Array.isArray(response.data) && response.data.length > 0) {
          const oldestOrder = response.data[response.data.length - 1]; // This is the oldest order
          setOrder(oldestOrder); // Set the oldest order to state
        } else {
          console.error("No orders found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchLatestOrder();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading payment details...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        {/* Thank You message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Thank You!</h1>
          <p className="text-lg text-gray-500 mt-2">Your payment has been processed successfully, and your order is being prepared.</p>
        </div>

        {/* Order Information */}
        {order ? (
          <div className="space-y-6">
            {/* Order ID */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Order ID:</span>
              <span className="text-gray-600">{order.id}</span>
            </div>

            {/* Order Status */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Status:</span>
              <span className="text-gray-600">{order.status}</span>
            </div>

            {/* Total Amount */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Total Amount:</span>
              <span className="text-gray-600">${order.total_amount}</span>
            </div>

            {/* Transaction ID */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Transaction ID:</span>
              <span className="text-gray-600">{order.transaction_id}</span>
            </div>

            {/* Payment Method */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Payment Method:</span>
              <span className="text-gray-600">{order.payment_gateway}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No orders found</p>
        )}

        {/* Button to Continue Shopping */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-black px-8 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
