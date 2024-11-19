import React, { useState } from "react";
import "../styles/Tierlist.css";

const Tierlist = () => {
  const [books, setBooks] = useState([
    { id: 1, name: "Sapiens", tier: null },
    { id: 2, name: "1984", tier: null },
    { id: 3, name: "To Kill a Mockingbird", tier: null },
    { id: 4, name: "The Subtle Art of Not Giving a F*ck", tier: null },
    { id: 5, name: "Educated", tier: null },
  ]);

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  // Assign tier and move to the next book
  const handleAssignTier = (tier) => {
    const updatedBooks = [...books];
    updatedBooks[currentBookIndex].tier = tier;
    setBooks(updatedBooks);

    // Move to the next book
    if (currentBookIndex < books.length+1) {
      setCurrentBookIndex(currentBookIndex + 1);
    }
  };

  // Count unjudged books
  const unjudgedCount = books.slice(currentBookIndex + 0).length;

  // Render the final tier list after all books are judged
  const renderTierlist = () => {
    return (
      <div className="final-tierlist">
        <h2>Your Final Tier List</h2>
        <div className="tier-list-container">
          {["S", "A", "B", "C", "D"].map((tier) => (
            <div key={tier} className={`tier tier-${tier.toLowerCase()}`}>
              <h3 className="tier-title">Tier {tier}</h3>
              <ul className="tier-books">
                {books
                  .filter((book) => book.tier === tier)
                  .map((book) => (
                    <li key={book.id} className="book-item">
                      {book.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  return (
    <div className="tierlist">
      {/* Show judging screen until all books are judged */}
      {currentBookIndex < books.length ? (
        <div className="judge-book">
          <h2>Assign Tier for:</h2>
          <h3>{books[currentBookIndex].name}</h3>
          <div className="tier-buttons">
            {["S", "A", "B", "C", "D"].map((tier) => (
              <button
                key={tier}
                onClick={() => handleAssignTier(tier)}
                className={`tier-btn tier-${tier.toLowerCase()}`}
              >
                Tier {tier}
              </button>
            ))}
          </div>
          <p>Books left to judge: {unjudgedCount}</p>
        </div>
      ) : (
        renderTierlist()
      )}
    </div>
  );
};

export default Tierlist;
