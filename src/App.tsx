import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to My Portfolio</h1>
        <p className="text-gray-600 mb-4">
          This is a modern React application built with TypeScript and Tailwind CSS.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>React 18 with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Responsive design</li>
              <li>Modern UI components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;