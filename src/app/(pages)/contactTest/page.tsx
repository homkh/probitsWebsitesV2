'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactTexting = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  // Controlled inputs
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e:any) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY',
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Email sent successfully!');
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setMessage('Failed to send the email. Please try again later.');
          setIsSending(false);
        },
      );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r p-6 text-black z-50">
      <form
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 h-32"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700 ${
              isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </div>

        {message && (
          <p className="text-center text-green-500 mt-4 font-semibold">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ContactTexting;
