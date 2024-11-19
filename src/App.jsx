import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookReviews from "./pages/BookReviews";
import Articles from "./pages/Articles";
import HomePage from "./pages/HomePage";
import Tierlist from "./pages/Tierlist";
// Routes setup

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="content">
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/book-reviews" element={<BookReviews />} />
            <Route path="/tierlist" element={<Tierlist />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
