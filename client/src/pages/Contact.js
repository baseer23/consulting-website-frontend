// Contact.js
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
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
  const [anonymousTip, setAnonymousTip] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTipChange = (e) => {
    setAnonymousTip(e.target.value);
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
    console.log('Triggering confetti...');
    setShowConfetti(true);

    // Simulate data storage
    console.log('Form Data:', formData);
    if (anonymousTip) console.log('Anonymous Tip:', anonymousTip);
    if (selectedEvent) console.log('Selected Event:', selectedEvent);

    setTimeout(() => {
      setShowConfetti(false);
      setFormData({ name: '', email: '', message: '', date: '', time: '' });
      setAnonymousTip('');
      setSelectedEvent(null);
    }, 3000); // Confetti displays for 3 seconds
  };

  useEffect(() => {
    console.log('Confetti state changed:', showConfetti);
  }, [showConfetti]);

  return (
    <div className="h-screen bg-gray-500 flex items-center justify-center">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="flex w-full max-w-[1600px]">
        {/* Left Pane - Anonymous Tips */}
        <div className="w-1/3 bg-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-4">Anonymous Tips</h2>
          <textarea
            name="anonymousTip"
            placeholder="Leave your anonymous tip here..."
            value={anonymousTip}
            onChange={handleTipChange}
            className="w-full border p-4 rounded h-48"
          ></textarea>
        </div>

        {/* Middle Pane - Contact Form */}
        <div className="w-1/3 bg-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {confirmation && <p className="text-green-500 mt-4">{confirmation}</p>}
        </div>

        {/* Right Pane - Calendar */}
        <div className="w-1/3 bg-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
          <div className="bg-white p-6 rounded shadow">
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
