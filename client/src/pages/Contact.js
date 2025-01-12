// Contact.js
import React from 'react';
import { InlineWidget } from 'react-calendly';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center py-4 sm:py-8">
      <div className="w-full max-w-md sm:max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center">Schedule a Meeting</h2>
        <div
          className="bg-gray-200 rounded-lg shadow-inner p-2 sm:p-4"
          style={{ height: '500px', maxHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <InlineWidget
            url="https://calendly.com/abdulbaseermohammedkhan"
            styles={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
