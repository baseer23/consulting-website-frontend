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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center py-4 sm:py-8 space-y-12">
      {/* Calendly Section */}
      <div className="w-full max-w-md sm:max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center">
          Schedule a Meeting
        </h2>
        <div
          className="bg-gray-200 rounded-lg shadow-inner p-2 sm:p-4"
          style={{
            height: '500px',
            maxHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InlineWidget
            url="https://calendly.com/abdulbaseermohammedkhan"
            styles={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-md sm:max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center">
          Contact Us
        </h2>
        {!messageSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email {anonymous ? '(Optional)' : '(Required)'}
              </label>
              <input
                type="email"
                name="email"
                required={!anonymous}
                className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 ${
                  anonymous ? 'focus:ring-gray-400' : 'focus:ring-blue-400'
                }`}
                placeholder="Your email (optional if anonymous)"
              />
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
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600">
              Thank you! Your message has been sent.
            </h3>
            <button
              className="mt-4 text-blue-500 underline hover:text-blue-600"
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
