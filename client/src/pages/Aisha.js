// About.js
import React from 'react';

function About() {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex w-full max-w-6xl">
        {/* Left Pane */}
        <div className="w-1/2 bg-gray-100 p-6 border-r border-gray-300">
          <h3 className="text-xl font-bold mb-4">Knowledge Graph</h3>
          <div className="border p-4 bg-white shadow-sm">
            <p>Visual representation of the knowledge graph goes here.</p>
          </div>
        </div>

        {/* Right Pane */}
        <div className="w-1/2 bg-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4">Chat with Aisha</h3>
          <div className="border p-4 bg-white shadow-sm flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
              <p><strong>You:</strong> What can you do?</p>
              <p><strong>Aisha:</strong> I can help gather and refine project requirements.</p>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;