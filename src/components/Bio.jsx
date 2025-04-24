import React from "react";
import BioImage from "../assets/DSC00199.webp";

import { Link } from "react-router-dom";

const Bio = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-full p-10 bg-[var(--bgColour)]">
      <div className="absolute inset-0 bg-grain"></div>
      <section className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto">
        <div className="relative flex-1 hover:shadow-1xl hover:scale-105 transition-all duration-300">
          <img
            src={BioImage}
            alt="Malachy Kitson"
            loading="lazy"
            className="w-[20rem] md:w-[30rem] h-auto object-cover border-6 border-[var(--bgColour)]"
          />
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-medium text-[var(--keyColour)] mb-2">
            BIO
          </h2>
          <p className="text-2xl lg:text-3xl leading-relaxed text-[var(--textColour)] mb-2">
            Hey, I’m <span className="font-bold">Malachy Kitson</span>,
          </p>
          <p className="text-lg lg:text-2xl leading-relaxed text-[var(--textColour)]">
            I'm a pianist and musician from{" "}
            <span className="flag-cursor transition-all duration-300">
              Ireland.
            </span>{" "}
            With over a<span className="font-bold"> decade</span> of experience,
            I’ve built my sound with a{" "}
            <span className="font-bold">classical foundation</span>, while
            embracing the
            <span className="italic"> freedom</span> of jazz and blues. I make
            music that feels right to me...{" "}
            <Link
              to="/about"
              onClick={scrollToTop}
              className="font-bold text-lg text-[var(--textColour)] hover:text-[var(--keyColour)] underline"
            >
              more.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Bio;
