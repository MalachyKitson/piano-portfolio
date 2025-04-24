import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ImageButton({
  src,
  width = "17.5rem",
  height = "17.5rem",
  text = "IMAGE",
  href = "#",
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative group overflow-hidden" style={{ width, height }}>
      <img
        src={src}
        alt={text}
        loading="lazy"
        className="w-full h-full border-6 border-[var(--bgColour)] object-cover opacity-50 transition-all duration-300"
      />
      <Link
        to={href}
        onClick={scrollToTop}
        className="absolute inset-0 flex items-center justify-center font-bold text-[var(--textColour)] hover:text-[var(--bgColour)] text-[1.5rem] z-10 transition-colors duration-300"
        aria-label={text}
      >
        {text}
      </Link>
      <div className="absolute inset-0 origin-bottom bg-[var(--textColour)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
    </div>
  );
}

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default ImageButton;
