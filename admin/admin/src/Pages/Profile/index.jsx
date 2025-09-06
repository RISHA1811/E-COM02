import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBox, FaLock, FaCrown, FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();

  const cards = [
    { icon: <FaBox className="text-4xl text-gray-500" />, title: 'Your Orders', description: 'Track, return, or buy things again', path: '/orders' },
    { icon: <FaLock className="text-4xl text-gray-500" />, title: 'Login & security', description: 'Edit login, name, and mobile number', path: '/login-security' },
    { icon: <FaCrown className="text-4xl text-gray-500" />, title: 'Exclusive', description: 'View benefits and payment settings', path: '/exclusive' },
    { icon: <FaMapMarkerAlt className="text-4xl text-gray-500" />, title: 'Your Addresses', description: 'Edit addresses for orders and gifts', path: '/addresses' },
    { icon: <FaCreditCard className="text-4xl text-gray-500" />, title: 'Payment options', description: 'Edit or add payment methods', path: '/payment-options' },
    { icon: <FaMoneyBillWave className="text-4xl text-gray-500" />, title: 'Amazon Pay balance', description: 'Add money to your balance', path: '/pay-balance' },
    { icon: <FaHeadset className="text-4xl text-gray-500" />, title: 'Contact Us', description: 'Contact our customer service via phone or chat', path: '/contact-us' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(card.path)}
          >
            <div className="mr-6">{card.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;