import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") || "signup";
  const { signUp, login } = useAuth();
  const [mode, setMode] = useState(initialMode);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  function onSubmit({ email, password }) {
    let result;
    if (mode === "signup") {
      result = signUp(email, password);
    } else {
      result = login(email, password);
    }

    if (result.success) {
      toast.success(result.message);
      navigate("/");
    } else {
      toast.error(result.message);
    }
  }
  function handleChangeMode(newMode) {
    setMode(newMode);
    navigate(`/auth?mode=${newMode}`);
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                  maxLength: { value: 12, message: "Password must be at most 12 characters" }
                })}
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-large">{mode === "signup" ? "Sign Up" : "Login"}</button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>Already have an account? <span className="auth-link" onClick={() => handleChangeMode("login")}>Login</span></p>
            ) : (
              <p>Don't have an account? <span className="auth-link" onClick={() => handleChangeMode("signup")}>Sign Up</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}