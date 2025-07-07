import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const LazyFaInstagram = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaInstagram }))
);
const LazyFaTiktok = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaTiktok }))
);
const LazyFaYoutube = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaYoutube }))
);

const Loading = React.lazy(() => import("../components/Loading"));

const Header = ({ loaded }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const socials = {
    tiktok: import.meta.env.VITE_SOCIAL_TIKTOK || "https://www.tiktok.com",
    instagram:
      import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://www.instagram.com",
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || "https://www.youtube.com",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-4 left-0 w-full p-4 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={scrollToTop}
          className={`hover:text-[var(--textHeaderColour)] text-[var(--keyColour)] text-4xl font-black font-[Roboto] transition-[transform,color] ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{
            transitionDuration: "2000ms, 400ms",
            transitionProperty: "transform, color",
          }}
        >
          MALACHY KITSON
        </Link>

        <nav
          className={`hidden pl-4 md:flex sm:space-x-6 space-x-8 font-bold transition-all duration-2000 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Link
            to="/"
            onClick={scrollToTop}
            className="relative text-[var(--textHeaderColour)] text-xl font-[Roboto] hover:text-[var(--keyColour)] hover:font-[Roboto] transition-colors duration-400 group"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className="relative text-[var(--textHeaderColour)] text-xl font-[Roboto] hover:text-[var(--keyColour)] transition-colors duration-400 group"
          >
            ABOUT
          </Link>
          <Link
            to="/portfolio"
            onClick={scrollToTop}
            className="relative text-[var(--textHeaderColour)] text-xl font-[Roboto] hover:text-[var(--keyColour)] transition-colors duration-400 group"
          >
            MUSIC
          </Link>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="relative text-[var(--textHeaderColour)] text-xl font-[Roboto] hover:text-[var(--keyColour)] transition-colors duration-400 group"
          >
            CONTACT
          </Link>
          <div className="hidden items-center justify-center md:flex space-x-4 text-[var(--textHeaderColour)]">
            <Suspense fallback={<Loading />}>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--keyColour)] transition-colors duration-400"
              >
                <LazyFaInstagram size={20} />
              </a>
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--keyColour)] transition-colors duration-400"
              >
                <LazyFaTiktok size={20} />
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--keyColour)] transition-colors duration-400"
              >
                <LazyFaYoutube size={20} />
              </a>
            </Suspense>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none relative z-30"
          >
            <FiMenu className="h-8 w-8 text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] cursor-pointer opacity-100 duration-400" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[var(--bgColour)] z-40 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-16 right-16">
          <button
            onClick={toggleMenu}
            className="text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] cursor-pointer focus:outline-none duration-400"
          >
            <FiX className="h-10 w-10" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6 border-1 border-[var(--bgColour)]">
          <Link
            to="/"
            className="text-2xl font-bold text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] duration-400"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-2xl font-bold text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] duration-400"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            to="/portfolio"
            className="text-2xl font-bold text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] duration-400"
            onClick={toggleMenu}
          >
            MUSIC
          </Link>
          <Link
            to="/contact"
            className="text-2xl font-bold text-[var(--textHeaderColour)] hover:text-[var(--keyColour)] duration-400"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
          <div className="flex space-x-6 mt-4">
            <Suspense fallback={<Loading />}>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--textHeaderColour)] transition-colors hover:text-[var(--keyColour)] duration-400"
              >
                <LazyFaInstagram size={24} />
              </a>
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--textHeaderColour)] transition-colors hover:text-[var(--keyColour)] duration-400"
              >
                <LazyFaTiktok size={24} />
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--textHeaderColour)] transition-colors hover:text-[var(--keyColour)] duration-400"
              >
                <LazyFaYoutube size={24} />
              </a>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
