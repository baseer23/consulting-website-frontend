import React, { useState } from 'react';

function Aisha() {
  const [messages, setMessages] = useState([
    { sender: 'You', text: 'What can you do?' },
    { sender: 'Aisha', text: 'I can help gather and refine project requirements.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'You', text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const simulatedResponse = new Promise((resolve) => {
        setTimeout(() => resolve({ reply: 'This is a simulated response.' }), 1000);
      });

      const data = await simulatedResponse;
      const botMessage = { sender: 'Aisha', text: data.reply };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = { sender: 'Aisha', text: 'Sorry, something went wrong. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center px-6">
      {/* Introduction Section */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Meet Aisha</h2>
        <p className="text-lg leading-relaxed">
          Aisha is your intelligent assistant, designed to simplify project requirements gathering and streamline communication.
          Using advanced AI, she bridges the gap between technical and non-technical teams, ensuring clarity, precision, and
          faster execution. Let Aisha transform your ideas into actionable insights.
        </p>
      </div>

      {/* Main UI */}
      <div className="flex w-full max-w-6xl">
        {/* Left Pane */}
        <div className="w-1/2 bg-gray-100 p-6 border-r border-gray-300">
          <h3 className="text-xl font-bold mb-4 text-purple-600">Knowledge Graph</h3>
          <div className="border p-4 bg-white shadow-sm h-full">
            <p>Graph visualization will dynamically update here.</p>
            <div className="mt-4">
              <ul>
                {messages.map((message, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {message.sender}: {message.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Pane */}
        <div className="w-1/2 bg-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-purple-600">Chat with Aisha</h3>
          <div className="border p-4 bg-white shadow-sm flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <p key={index}>
                  <strong>{message.sender}:</strong> {message.text}
                </p>
              ))}
              {isLoading && <p className="text-gray-500">Aisha is typing...</p>}
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="border rounded p-2 flex-1"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aisha;
