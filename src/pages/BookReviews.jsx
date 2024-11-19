import React from "react";
import "../styles/BookReviews.css";

const BookReviews = () => {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      review: "An incredible guide to building good habits and breaking bad ones. Practical, relatable, and full of actionable advice.",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY436_QL65_.jpg", // Sample book image
      date: "Nov 10, 2024",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      review: "A timeless fable about following your dreams and listening to your heart. Inspiring and beautifully written.",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY436_QL65_.jpg",
      date: "Nov 12, 2024",
    },
    {
      id: 3,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      review: "A deep dive into human history, explaining how we evolved into the dominant species. Eye-opening and thought-provoking.",
      image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY436_QL65_.jpg",
      date: "Nov 15, 2024",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      review: "A chilling dystopian novel that explores totalitarianism, surveillance, and the erosion of truth. A must-read classic.",
      image: "https://prodimage.images-bn.com/pimages/9780452262935_p0_v5_s1200x630.jpg",
      date: "Nov 17, 2024",
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      review: "A profound novel tackling racial injustice and moral growth through the eyes of young Scout Finch. Timeless and heart-wrenching.",
      image: "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UY436_QL65_.jpg",
      date: "Nov 18, 2024",
    },
    {
      id: 6,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      review: "A counterintuitive approach to living a meaningful life, focusing on embracing the struggles that matter.",
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY436_QL65_.jpg",
      date: "Nov 19, 2024",
    },
    {
      id: 7,
      title: "Educated",
      author: "Tara Westover",
      review: "A gripping memoir of resilience and self-discovery, chronicling the author's journey from a strict, isolated upbringing to earning a PhD.",
      image: "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UY436_QL65_.jpg",
      date: "Nov 20, 2024",
    },
    {
      id: 8,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      review: "An enlightening exploration of the two systems of thought—intuitive and analytical—and how they shape decision-making.",
      image: "https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9780141033570c_9.png",
      date: "Nov 21, 2024",
    }
    
  ];

  return (
    <div className="book-reviews">
      <h1 className="reviews-heading">Book Reviews</h1>
      <div className="review-list">
        {books.map((book) => (
          <div className="review-card" key={book.id}>
            <img className="book-image" src={book.image} alt={book.title} />
            <div className="review-content">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">By {book.author}</p>
              <p className="book-review">{book.review}</p>
              <span className="review-date">Reviewed on {book.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReviews;
