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
      ></div>
    </>
  );
};

export default Hero;
