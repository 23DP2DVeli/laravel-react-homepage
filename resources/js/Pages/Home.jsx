import React from "react";
import { useAuth } from "../context/AuthContext.jsx";


export default function Home() {
  const { user, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      {user ? (
        <>
          <p>Hello, {user.name}!</p>
          <button
            onClick={logout}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "12px 24px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "12px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ef4444")}
          >
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
