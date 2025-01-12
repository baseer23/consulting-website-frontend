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
        setTimeout(() => resolve({ reply: 'This is a simulated response from Agentic AI.' }), 1000);
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
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-6 shadow-md text-center">
        <h1 className="text-3xl font-bold mb-2">Meet Aisha</h1>
        <p className="text-base">
          Aisha is here to simplify project workflows, ensuring clarity and actionable insights with precision and speed.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-wrap w-full max-w-4xl gap-4">
        {/* Chat Section */}
        <div className="flex-1 min-w-[300px] bg-gray-800 rounded-lg p-6 shadow-md flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">Chat with Aisha</h2>
          <div className="flex-1 border p-4 bg-gray-900 rounded-lg shadow-inner mb-4 overflow-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <strong className={`block ${message.sender === 'You' ? 'text-blue-400' : 'text-purple-400'}`}>
                  {message.sender}:
                </strong>
                <p className="text-gray-300 text-sm">{message.text}</p>
              </div>
            ))}
            {isLoading && <p className="text-gray-500 text-sm">Aisha is typing...</p>}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white border-none focus:outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition text-sm"
            >
              Send
            </button>
          </div>
        </div>

        {/* Knowledge Graph Placeholder */}
        <div className="flex-1 min-w-[300px] bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">Knowledge Graph</h2>
          <div className="border p-4 bg-gray-900 rounded-lg shadow-inner h-64 overflow-auto">
            <p className="text-gray-400 text-sm mb-2">Graph visualization will dynamically update here:</p>
            <ul className="space-y-2 pl-2 text-xs">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={`p-2 rounded-md ${
                    message.sender === 'You'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  <strong>{message.sender}:</strong> {message.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aisha;
