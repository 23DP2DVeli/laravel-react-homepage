import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../css/app.css';
import Register from './Registration/Register.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    {/* Nav */}
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
      </div>
    </nav>

    {/* Content */}
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<div className="p-8">Home Page</div>} />
    </Routes>
  </BrowserRouter>
);
