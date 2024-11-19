import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookReviews from "./pages/BookReviews";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/book-reviews" element={<BookReviews />} />
          </Routes>
        </main>
        <Footer />