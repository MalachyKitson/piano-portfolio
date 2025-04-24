import React from "react";
import heroImage from "../assets/DSC00093.webp";
import heroImagexl from "../assets/DSC000932.webp";

const Hero = () => {
  return (
    <>
      <style>
        {`
          @media (min-width: 1800px) {
            .hero-bg {
              --hero-image: url(${heroImagexl});
            }
          }
        `}
      </style>
      <div
        className="h-screen bg-cover bg-[position:50%_30%] relative hero-bg"
        style={{ backgroundImage: `var(--hero-image, url(${heroImage}))` }}
      >
        <div className="absolute inset-0 flex p-10 items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center p-2 border-3">
            Pianist & Musician
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
