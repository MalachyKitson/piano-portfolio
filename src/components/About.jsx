import React from "react";
// import AboutImage from "../assets/DSC00093.webp";
import AboutImage from "../assets/DSC06998.webp";

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:h-screen h-full pt-30 p-10 bg-[var(--bgColour)]">
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch w-full max-w-screen-lg space-y-10 md:space-y-0 md:space-x-10">
        <div className="relative flex-1 transition-all duration-300">
          <img
            src={AboutImage}
            alt="About"
            loading="lazy"
            className="w-[21rem] h-[21rem] md:w-full md:h-full lg:w-[30rem] lg:h[40-rem] object-cover border-6 border-[var(--textColour)]"
          />
        </div>
        <div className="flex-1 pt-4 md:pt-0 flex flex-col justify-start text-[var(--textColour)]">
          <p className="text-[var(--textColour)] text-4xl md:text-5xl font-black font-[Roboto] mb-2">
            ABOUT
          </p>
          <p className="text-2xl font-[Roboto] mb-4">Hey I'm Malachy!</p>
          <p className="text-base font-light font-[Roboto] text-justify">
            I’m a <span className="font-bold">Artist/Singer-Songwriter</span> from{" "}
            <span className="flag-cursor transition-all duration-300">
              Ireland
            </span>{" "}
            and I have been making music since I was 10 years old.
            <br />
            <br />
              I grew up playing <strong>piano and guitar</strong>, and I’ve been writing songs for as long as I can remember. 
              Now I’m also learning how to <em>mix and produce everything myself</em> and I love being hands-on with every part of it and learning how to do everything.
            <br />
            <br />
              I'm influenced by artists like <strong>Billie Eilish</strong>, <strong>Lizzy McAlpine</strong>, <strong>Tyler, the Creator</strong>, and of course <strong>Taylor Swift</strong>. 
              But I also grew up with artists like <em>Fleetwood Mac, The Beatles, Queen, and ABBA</em>. 
            <br />
            <br />
            <em>I make music because it matters to me, maybe it’ll matter to you too! :)</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
