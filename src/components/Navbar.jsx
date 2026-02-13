import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  function handleLogout() {
    const result = logout();
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">ShopHub</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/checkout" className="navbar-link">Cart</Link>
        </div>
        <div className="navbar-auth">
          <div className="navbar-auth-links">
            {user ? (
              <>
                <span className="user-email" style={{ alignSelf: "center", margin: "0 1rem" }}>{user.email}</span>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login" className="btn btn-secondary">Login</Link>
                <Link to="/auth?mode=signup" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}