/*import React from "react";

export default function Search() {
  return (
    <div className="search-container">
      <h2>Search Results</h2>
    </div>
  );
}*/

import React, { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import destinationsData from "../data/destinations";

export default function Search() {
  const [query, setQuery] = useState("");
  const [continent, setContinent] = useState("All");

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesQuery = dest.name.toLowerCase().includes(query.toLowerCase());
    const matchesContinent = continent === "All" || dest.continent === continent;
    return matchesQuery && matchesContinent;
  });

  return (
    <div style={{ padding: "30px" }}>
      <h2>Search & Filter Destinations</h2>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search destination"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="All">All Continents</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))
        ) : (
          <p>No destinations match your search.</p>
        )}
      </div>
    </div>
  );
}

