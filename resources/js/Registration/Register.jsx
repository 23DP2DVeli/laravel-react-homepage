import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/Auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
      const res = await axios.post(
        "/register",
        { name, email, password, password_confirmation: passwordConfirmation },
        { withCredentials: true, headers: { Accept: "application/json" } }
      );
      alert(res.data.message);
      navigate(res.data.redirect || "/");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        console.error(err);
      }
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
          <span className="auth-panel-tag">Join the Community</span>
          <h2 className="auth-panel-headline">
            Discover your<br /><em>next</em> great<br />watch.
          </h2>
          <p className="auth-panel-desc">
            Create a free account and get personalized recommendations, build your watchlist, and connect with other film lovers.
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
            <h1 className="auth-title">Create account</h1>
            <p className="auth-sub">Join the MovieClub community today.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <input
                type="text"
                placeholder="Jeffrey Epstein"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`auth-input ${errors.name ? "auth-input-error" : ""}`}
              />
              {errors.name && <p className="auth-error">{errors.name[0]}</p>}
            </div>

            <div className="auth-field">
              <label className="auth-label">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`auth-input ${errors.email ? "auth-input-error" : ""}`}
              />
              {errors.email && <p className="auth-error">{errors.email[0]}</p>}
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`auth-input ${errors.password ? "auth-input-error" : ""}`}
              />
              {errors.password && <p className="auth-error">{errors.password[0]}</p>}
            </div>

            <div className="auth-field">
              <label className="auth-label">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className={`auth-input ${errors.password_confirmation ? "auth-input-error" : ""}`}
              />
              {errors.password_confirmation && (
                <p className="auth-error">{errors.password_confirmation[0]}</p>
              )}
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? <span className="auth-btn-spinner" /> : "Create Account"}
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account?{" "}
            <a href="/login" className="auth-link">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
