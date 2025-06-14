// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-600 underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
