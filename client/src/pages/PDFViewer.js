// PDFViewer.js
import React from 'react';

function PDFViewer() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">View My Documents</h2>
      <div className="grid grid-cols-1 gap-6">
        <iframe
          src="/path-to-resume.pdf"
          title="Resume"
          className="w-full h-96 border border-gray-300 rounded shadow"
        ></iframe>
        <iframe
          src="/path-to-cv.pdf"
          title="CV"
          className="w-full h-96 border border-gray-300 rounded shadow"
        ></iframe>
      </div>
    </div>
  );
}

export default PDFViewer;