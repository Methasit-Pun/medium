import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Personal Hub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book-reviews">Book Reviews</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/tierlist">Tierlist</Link>
      </nav>
    </header>
  );
};

export default Header;
