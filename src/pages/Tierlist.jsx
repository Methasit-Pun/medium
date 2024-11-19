import React, { useState } from "react";
import { generateTierlist } from "../utils/tierlistUtils"; // Import the tierlist function
import "../styles/Tierlist.css";
const Tierlist = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", tier: "S" },
    { id: 2, name: "Item 2", tier: "A" },
    { id: 3, name: "Item 3", tier: "B" },
    { id: 4, name: "Item 4", tier: "C" },
  ]);

  const handleGenerate = () => {
    const updatedItems = generateTierlist(items);
    setItems(updatedItems);
  };

  return (
    <div className="tierlist">
      <h2>Tier List</h2>
      <button onClick={handleGenerate}>Generate Tier List</button>
      <div className="tiers">
        {["S", "A", "B", "C", "D"].map((tier) => (
          <div key={tier} className="tier">
            <h3>Tier {tier}</h3>
            <ul>
              {items
                .filter((item) => item.tier === tier)
                .map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tierlist;
