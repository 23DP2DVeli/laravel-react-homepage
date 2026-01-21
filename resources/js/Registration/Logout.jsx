import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Logout() {
  const { logout } = useAuth();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (err) {
      setError("Error logging out");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "32px auto", padding: "16px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px", textAlign: "center" }}>Logout</h2>
      {error && <p style={{ color: "#ef4444", marginBottom: "8px" }}>{error}</p>}
      <p style={{ marginBottom: "16px", textAlign: "center" }}>Are you sure u want to logout?</p>
      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          backgroundColor: "#ef4444",
          color: "white",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#dc2626")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ef4444")}
      >
        Logout
      </button>
    </div>
  );
}
