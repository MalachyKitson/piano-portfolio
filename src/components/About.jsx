import React from "react";
import AboutImage from "../assets/DSC00093.webp";

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:h-screen h-full pt-30 p-10 bg-[var(--bgColour)]">
      <div className="absolute inset-0 bg-grain"></div>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch w-full max-w-screen-lg space-y-10 md:space-y-0 md:space-x-10">
        <div className="relative flex-1 hover:shadow-1xl hover:scale-105 transition-all duration-300">
          <img
            src={AboutImage}
            alt="About"
            loading="lazy"
            className="w-[21rem] h-[21rem] md:w-full md:h-full lg:w-[30rem] lg:h[40-rem] object-cover border-6 border-[var(--bgColour)] transition-all duration-300"
          />
        </div>
        <div className="flex-1 pt-4 md:pt-0 flex flex-col justify-start text-[var(--textColour)]">
          <p className="text-[var(--textColour)] text-4xl md:text-5xl font-black font-[Roboto] mb-4">
            ABOUT
          </p>
          <p className="text-2xl font-[Roboto] mb-2">Hey I'm Malachy!</p>
          <p className="text-base font-light font-[Roboto]">
            I’m a <span className="font-bold">pianist and musician</span> from{" "}
            <span className="flag-cursor transition-all duration-300">
              Ireland.
            </span>{" "}
            With over a <span className="font-bold">decade</span> of experience,
            I’ve built my sound on a{" "}
            <span className="font-bold">classical foundation</span>, while
            embracing the
            <span className="italic"> freedom </span> of jazz and blues. I make
            music that feels right to me.
            <br />
            <br />
            Every performance I give can be{" "}
            <span className="font-bold">improvised and unique</span>, bringing
            something fresh and spontaneous every time I play. I can create an
            atmosphere that
            <span className="italic"> fits the moment</span>.
            <br />
            <br />
            My <span className="font-bold">classical training</span> gives me
            the technical skill, while my love for jazz and blues lets me
            <span className="italic"> break the rules</span> and craft
            performances that feel{" "}
            <span className="font-bold">right to me in the moment</span>.
            <br />
            <br />
            Beyond piano, I’m also{" "}
            <span className="font-bold">
              classically trained in singing
            </span>{" "}
            and have performed in{" "}
            <span className="font-bold">musicals and stage productions</span>.
            While piano is my main instrument, I also play guitar and love
            blending different styles and genres.
            <br />
            <br />
            At the heart of it, I just love making music that feels honest. If
            you ever want to get in touch, feel free I'm always happy to
            connect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
