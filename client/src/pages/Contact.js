// Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="h-screen bg-gray-500 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded"
          ></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;