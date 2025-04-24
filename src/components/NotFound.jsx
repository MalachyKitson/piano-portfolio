import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[var(--bgColour)] text-[var(--textColour)]"
      role="alert"
      aria-label="Page not found"
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        onClick={scrollToTop}
        className="px-6 py-3 bg-[var(--keyColour)] text-[var(--bgColour)] font-medium rounded hover:bg-[var(--textColour)] transition-colors duration-300"
        aria-label="Return to Home Page"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
