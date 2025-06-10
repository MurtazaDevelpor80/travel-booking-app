import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <Link to={`/booking/${destination.id}`} className="book-btn">Book Now</Link>
      </div>
    </div>
  );
}
