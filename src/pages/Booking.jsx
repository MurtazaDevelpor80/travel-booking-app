/*import React from "react";
import { useParams } from "react-router-dom";

export default function Booking() {
  const { id } = useParams();

  return (
    <div className="booking-container">
      <h2>Booking Page</h2>
      <p>Trip ID: {id}</p>
    </div>
  );
}*/

/*import React, { useState } from "react";
import { useParams } from "react-router-dom";
import destinations from "../data/destinations";



export default function Booking() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving to localStorage
    const bookingInfo = {
      destination: destination.name,
      ...formData,
    };

    localStorage.setItem("latestBooking", JSON.stringify(bookingInfo));
    setSubmitted(true);
  };

  if (!destination) return <h2>Destination not found.</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Book Your Trip to {destination.name}</h2>
      <img src={destination.image} alt={destination.name} style={{ width: "300px", height: "200px", objectFit: "cover", margin: "20px 0" }} />
      <p>{destination.description}</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Full Name:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Start Date:</label><br />
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>End Date:</label><br />
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
          </div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#3498db", color: "#fff", border: "none", borderRadius: "5px" }}>
            Confirm Booking
          </button>
        </form>
      ) : (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Booking Confirmed!</h3>
          <p>We'll contact you shortly at {formData.email}.</p>
        </div>
      )}
    </div>
  );
}*/

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destinations";
import { getCurrentUser } from "../utils/auth";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
      setFormData((prev) => ({
        ...prev,
        name: currentUser.name,
        email: currentUser.email,
      }));
    }
    setIsLoading(false);
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingInfo = {
      destination: destination.name,
      ...formData,
    };
    localStorage.setItem("latestBooking", JSON.stringify(bookingInfo));
    setSubmitted(true);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!destination) return <h2>Destination not found.</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Book Your Trip to {destination.name}</h2>
      <img
        src={destination.image}
        alt={destination.name}
        style={{ width: "300px", height: "200px", objectFit: "cover", margin: "20px 0" }}
      />
      <p>{destination.description}</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Full Name:</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Start Date:</label><br />
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>End Date:</label><br />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{ padding: "10px 20px", backgroundColor: "#3498db", color: "#fff", border: "none", borderRadius: "5px" }}
          >
            Confirm Booking
          </button>
        </form>
      ) : (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Booking Confirmed!</h3>
          <p>We’ll contact you shortly at {formData.email}.</p>
        </div>
      )}
    </div>
  );
}

