import React from 'react';

function Card({ title, children }) {
  return (
    <div className="border rounded-lg shadow p-4 my-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default Card;
