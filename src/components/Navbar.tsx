import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="space-x-3">
      <Link to="/">Home</Link>
      <Link to="/journal">Journal</Link>
    </div>
  );
}
