import React, { Suspense } from "react";
const Loading = React.lazy(() => import("../components/Loading"));

const LazyFaTiktok = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaTiktok }))
);
const LazyFaInstagram = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaInstagram }))
);
const LazyFaYoutube = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaYoutube }))
);

const Footer = () => {
  const socials = {
    tiktok: import.meta.env.VITE_SOCIAL_TIKTOK || "https://www.tiktok.com",
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://www.instagram.com",
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || "https://www.youtube.com",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[var(--bgColour)] text-[var(--textColour)] py-8 px-6">
      <div className="max-w-md mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="mb-4 md:mb-0 md:pr-10 text-center">
          <h2 className="text-3xl font-bold text-[var(--textColour)]">
            Malachy Kitson
          </h2>
          <p className="text-sm text-[var(--textColour)] mt-2">
            Pianist | Performer | Musician
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-2">
          <Suspense fallback={<Loading />}>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--textColour)] hover:text-[var(--keyColour)] transition"
              aria-label="Instagram"
            >
              <LazyFaInstagram size={24} />
            </a>
            <a
              href={socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--textColour)] hover:text-[var(--keyColour)] transition"
              aria-label="TikTok"
            >
              <LazyFaTiktok size={24} />
            </a>
            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--textColour)] hover:text-[var(--keyColour)] transition"
              aria-label="YouTube"
            >
              <LazyFaYoutube size={24} />
            </a>
          </Suspense>
        </div>
      </div>
      <div className="border-t border-[var(--textColour)] mt-6 pt-4 text-center text-sm text-[var(--textColour)]">
        © {new Date().getFullYear()} Malachy Kitson. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
