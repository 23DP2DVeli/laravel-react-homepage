import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "../../css/Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel-left">
        <a href="/" className="auth-panel-logo">
          <div className="auth-panel-logo-mark">
            <svg viewBox="0 0 20 20" fill="white">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM4 8a1 1 0 000 2h.01a1 1 0 100-2H4zm4 0a1 1 0 000 2h4a1 1 0 100-2H8zm6 0a1 1 0 000 2h.01a1 1 0 100-2h-.01z" />
            </svg>
          </div>
          <span className="auth-panel-logo-text">MovieClub</span>
        </a>

        <div className="auth-panel-content">
          <span className="auth-panel-tag">Your Cinema Companion</span>
          <h2 className="auth-panel-headline">
            Every great<br />film <em>awaits</em><br />you.
          </h2>
          <p className="auth-panel-desc">
            Thousands of movies, curated collections, and recommendations built around your taste.
          </p>
        </div>

        <div className="auth-panel-stats">
          <div>
            <div className="auth-stat-val">10K+</div>
            <div className="auth-stat-label">Movies</div>
          </div>
          <div>
            <div className="auth-stat-val">50K+</div>
            <div className="auth-stat-label">Users</div>
          </div>
          <div>
            <div className="auth-stat-val">4.8★</div>
            <div className="auth-stat-label">Rating</div>
          </div>
        </div>
      </div>

      <div className="auth-panel-right">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-sub">Sign in to your MovieClub account.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="auth-alert">{error}</div>}

            <div className="auth-field">
              <label className="auth-label">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? <span className="auth-btn-spinner" /> : "Sign In"}
            </button>
          </form>

          <p className="auth-footer-text">
            Don't have an account?{" "}
            <a href="/register" className="auth-link">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
