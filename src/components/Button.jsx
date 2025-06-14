// src/components/Button.jsx
function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
