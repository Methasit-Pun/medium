import React from "react";
import "../styles/Articles.css";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "How to Start Your Reading Journey",
      description: "Tips and tricks to cultivate the habit of reading and fall in love with books.",
      author: "Jane Doe",
      date: "Nov 18, 2024",
    },
    {
      id: 2,
      title: "The Art of Writing Reviews",
      description: "Learn the subtle techniques of crafting meaningful and impactful reviews.",
      author: "John Smith",
      date: "Nov 15, 2024",
    },
    {
      id: 3,
      title: "10 Must-Read Classics",
      description: "A list of timeless books that everyone should read at least once.",
      author: "Emily Clark",
      date: "Nov 10, 2024",
    },
  ];

  return (
    <div className="articles">
      <h1 className="articles-heading">Explore Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <div className="article-meta">
              <span className="article-author">By {article.author}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
