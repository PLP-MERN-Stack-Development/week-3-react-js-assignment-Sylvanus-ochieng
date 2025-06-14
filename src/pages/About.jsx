// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">ℹ️ About Page</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        This is the About page of your React application. You can include details about your app, the developer, or anything else you'd like to highlight here.
      </p>
    </div>
  );
}

export default About;
