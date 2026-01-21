import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // CSRF cookie Laravel
      await axios.get("/sanctum/csrf-cookie", { withCredentials: true });

      // POST
      const res = await axios.post(
        "/register",
        {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
        {
          withCredentials: true,
          headers: { Accept: "application/json" },
        }
      );

      alert(res.data.message);
      navigate(res.data.redirect || "/");

    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow mt-8"
    >
      <h2 className="text-2xl mb-4 text-center">Register</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      {errors.name && <p className="text-red-500 mb-2">{errors.name[0]}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      {errors.email && <p className="text-red-500 mb-2">{errors.email[0]}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      {errors.password && <p className="text-red-500 mb-2">{errors.password[0]}</p>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      {errors.password_confirmation && (
        <p className="text-red-500 mb-2">{errors.password_confirmation[0]}</p>
      )}

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
        Register
      </button>
    </form>
  );
}
