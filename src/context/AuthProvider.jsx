import { useState } from "react";
import { AuthContext } from "./context";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser ? { email: currentUser } : null;
  });
  function signUp(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.find(existingUser => existingUser.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("currentUser", email);
    setUser({ email });
    return { success: true, message: "Signed up successfully!" };
  }
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", user.email);
      setUser({ email: user.email });
      return { success: true, message: "Logged in successfully!" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("currentUser");
    return { success: true, message: "Logged out successfully!" };
  }
  return <AuthContext.Provider value={{ signUp, login, logout, user }}>{children}</AuthContext.Provider>;
}