import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on startup
  const fetchUser = async () => {
    try {
      await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
      const res = await axios.get("/api/user", { withCredentials: true });
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Login method
 const login = async (email, password) => {
  try {
    await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
    const res = await axios.post(
      "/api/login",
      { email, password },
      { withCredentials: true }
    );
    if (res.status === 200) {
      await fetchUser();
    }
  } catch (err) {
    console.error("Login error:", err.response?.data || err);
    throw err;
  }
};

  // Logout method
  const logout = async () => {
    await axios.post("/api/logout", {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
