import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';

function Contact() {
  const [anonymous, setAnonymous] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xovvyzgb', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });

    if (response.ok) {
      setMessageSent(true);
      form.reset();
    } else {
      alert('There was an issue sending your message.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-gray-600">
          Whether you have a question, want to collaborate, or just want to say
          hi, we’re here to help.
        </p>
      </div>

      {/* Calendly Section */}
      <div className="w-full max-w-4xl bg-white p-6 sm:p-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Schedule a Meeting
        </h2>
        <InlineWidget
          url="https://calendly.com/abdulbaseermohammedkhan"
          styles={{ height: '500px', width: '100%' }}
        />
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-4xl bg-white p-6 sm:p-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        {!messageSent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your full name"
                required={!anonymous}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email {anonymous ? '(Optional)' : '(Required)'}
              </label>
              <input
                type="email"
                name="email"
                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  anonymous ? 'focus:ring-gray-400' : 'focus:ring-blue-400'
                }`}
                placeholder="Your email (optional if anonymous)"
                required={!anonymous}
              />
            </div>

            {/* Reason for Contact */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Reason for Contact
              </label>
              <select
                name="reason"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select a reason</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            {/* Anonymous Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymousToggle"
                className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-400"
                onChange={() => setAnonymous(!anonymous)}
              />
              <label
                htmlFor="anonymousToggle"
                className="text-gray-700 font-medium"
              >
                Send anonymously
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-green-600">
              Thank you! Your message has been sent.
            </h3>
            <button
              className="text-blue-500 underline hover:text-blue-600"
              onClick={() => setMessageSent(false)}
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
