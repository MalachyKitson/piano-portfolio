import React from "react";
import ImageButton from "../components/ImageButton";
import Image1 from "../assets/DSC00051.webp";
import Image2 from "../assets/DSC00065.webp";
import Image3 from "../assets/DSC00172.webp";

const PortfolioDirect = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-[var(--bg2Colour)]">
      <div className="absolute inset-0 bg-grain"></div>
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-5xl font-medium text-[var(--textColour)] text-center mb-10">
          LISTEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          <div className="relative w-[20rem] md:w-full overflow-hidden transform transition duration-300 hover:scale-105 mx-auto">
            <ImageButton
              src={Image1}
              alt="Piano"
              width="100%"
              height="100%"
              text="CLASSICAL"
              href="/portfolio"
            />
          </div>
          <div className="relative w-[20rem] md:w-full overflow-hidden transform transition duration-300 hover:scale-105 mx-auto">
            <ImageButton
              src={Image3}
              alt="Modern Music"
              width="100%"
              height="100%"
              text="MODERN MUSIC"
              href="/portfolio"
            />
          </div>
          <div className="relative w-[20rem] md:w-full overflow-hidden transform transition duration-300 hover:scale-105 mx-auto">
            <ImageButton
              src={Image2}
              alt="Jazz&Blues"
              width="100%"
              height="100%"
              text="JAZZ & BLUES"
              href="/portfolio"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDirect;
