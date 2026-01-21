import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow mt-8">
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "12px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "12px",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Login
      </button>
    </form>
  );
}
