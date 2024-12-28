// Contact.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: '',
  });
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateSelect = (selectionInfo) => {
    const { start, end } = selectionInfo;
    const duration = (new Date(end) - new Date(start)) / (1000 * 60); // Duration in minutes

    if (duration > 30) {
      alert('You can only select a time frame of less than 30 minutes. For longer durations, please contact us for premium support.');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      date: start.toISOString().split('T')[0],
      time: start.toTimeString().split(' ')[0],
    }));

    setSelectedEvent({
      title: 'Scheduled Meeting',
      start,
      end,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setError('Email and Message are mandatory fields.');
      return;
    }

    if (!formData.date || !formData.time) {
      setError('Please select a valid date and time.');
      return;
    }

    setError('');
    setConfirmation('Thank you! Your message has been received. We will get back to you shortly.');

    console.log('Form Data:', formData);
    if (selectedEvent) console.log('Selected Event:', selectedEvent);

    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', date: '', time: '' });
      setSelectedEvent(null);
    }, 3000);
  };

  return (
    <div className="h-screen bg-gray-500 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-4 px-4">
        {/* Contact Form Pane */}
        <div className="lg:w-1/2 bg-gray-100 p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name (Optional)"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border p-4 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border p-4 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border p-4 rounded h-48"
            ></textarea>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full">
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {confirmation && <p className="text-green-500 mt-4">{confirmation}</p>}
        </div>

        {/* Calendar Pane */}
        <div className="lg:w-1/2 bg-gray-100 p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
          <div className="bg-white p-4 rounded shadow">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              selectable={true}
              selectMirror={true}
              events={selectedEvent ? [selectedEvent] : []}
              select={handleDateSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
