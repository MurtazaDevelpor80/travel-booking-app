import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginUser(form);
    if (!result.success) {
      setError(result.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} style={{ width: "100%", marginBottom: 10, padding: 8 }} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} style={{ width: "100%", marginBottom: 10, padding: 8 }} />
        <button type="submit" style={{ padding: 10, width: "100%" }}>Login</button>
      </form>
    </div>
  );
}
