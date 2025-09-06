import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, date: '2024-07-20', total: 59.99, status: 'Shipped' },
    { id: 2, date: '2024-07-18', total: 25.50, status: 'Delivered' },
    { id: 3, date: '2024-07-15', total: 120.00, status: 'Delivered' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Order ID</th>
              <th className="py-2">Date</th>
              <th className="py-2">Total</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4">#{order.id}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4">${order.total}</td>
                <td className="py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;