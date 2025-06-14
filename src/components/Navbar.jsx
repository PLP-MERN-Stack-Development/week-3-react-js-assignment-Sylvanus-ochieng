// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
