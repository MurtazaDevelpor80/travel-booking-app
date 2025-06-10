import React, { useState } from "react";
import { registerUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = registerUser(form);
    if (!result.success) {
      setError(result.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} style={{ width: "100%", marginBottom: 10, padding: 8 }} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} style={{ width: "100%", marginBottom: 10, padding: 8 }} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} style={{ width: "100%", marginBottom: 10, padding: 8 }} />
        <button type="submit" style={{ padding: 10, width: "100%" }}>Register</button>
      </form>
    </div>
  );
}
