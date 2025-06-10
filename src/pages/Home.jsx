/*import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to TravelEase</h1>
      <p>Find your next adventure</p>
    </div>
  );
}*/

import React from "react";
import DestinationCard from "../components/DestinationCard";
import "../styles/card.css";
import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import ny from "../assets/ny.jpg";

const destinations = [
  {
    id: 1,
    name: "Paris",
    description: "Explore the City of Light with Eiffel Tower and cafes.",
    image: paris,
  },
  {
    id: 2,
    name: "Tokyo",
    description: "Experience tradition and technology in Japan's capital.",
    image: tokyo,
  },
  {
    id: 3,
    name: "Maldives",
    description: "Relax in tropical paradise with crystal-clear waters.",
    image: ny,
  },
];

export default function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Top Destinations</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}

