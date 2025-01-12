// Contact.js
import React from 'react';
import { InlineWidget } from 'react-calendly';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center py-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-gray-700 mb-8 text-center">Schedule a Meeting</h2>
        <div className="bg-gray-50 rounded-lg shadow-inner p-4" style={{ height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
