import React from 'react';

const Addresses = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Addresses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Default Address</h2>
          <p className="text-gray-600">John Doe</p>
          <p className="text-gray-600">123 Main St</p>
          <p className="text-gray-600">Anytown, USA 12345</p>
          <div className="mt-4">
            <button className="text-blue-500 hover:text-blue-700 font-semibold mr-4">Edit</button>
            <button className="text-red-500 hover:text-red-700 font-semibold">Remove</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">+</h2>
            <p className="text-gray-600">Add Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
