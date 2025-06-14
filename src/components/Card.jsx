// src/components/Card.jsx
function Card({ title, children }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white my-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
