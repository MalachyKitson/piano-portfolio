import React, { useState, Suspense } from "react";

const Image1 = React.lazy(() => import("../assets/DSC00051.webp"));
const Image2 = React.lazy(() => import("../assets/DSC00051.webp"));
const Image3 = React.lazy(() => import("../assets/DSC00051.webp"));
const Image4 = React.lazy(() => import("../assets/DSC00065.webp"));
const Image5 = React.lazy(() => import("../assets/DSC00065.webp"));
const Image6 = React.lazy(() => import("../assets/DSC00065.webp"));
const Image7 = React.lazy(() => import("../assets/DSC00065.webp"));
const Image8 = React.lazy(() => import("../assets/DSC00065.webp"));
const Image9 = React.lazy(() => import("../assets/DSC00065.webp"));

const Loading = React.lazy(() => import("../components/Loading"));

const portfolioSections = [
  {
    id: "classical",
    title: "Classical Performances",
    videos: [
      // {
      //   id: 1,
      //   image: Image1,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID7",
      //   title: "Indie Cover",
      //   subtitle: "Acoustic Session",
      // },
      // {
      //   id: 2,
      //   image: Image2,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID8",
      //   title: "Pop Piano",
      //   subtitle: "Live Studio Recording",
      // },
      // {
      //   id: 3,
      //   image: Image3,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID9",
      //   title: "Cinematic Arrangement",
      //   subtitle: "Film Score Performance",
      // },
    ],
  },
  {
    id: "jazz-blues",
    title: "Jazz & Blues Sessions",
    videos: [
      // {
      //   id: 4,
      //   image: Image4,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID7",
      //   title: "Indie Cover",
      //   subtitle: "Acoustic Session",
      // },
      // {
      //   id: 5,
      //   image: Image5,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID8",
      //   title: "Pop Piano",
      //   subtitle: "Live Studio Recording",
      // },
      // {
      //   id: 6,
      //   image: Image6,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID9",
      //   title: "Cinematic Arrangement",
      //   subtitle: "Film Score Performance",
      // },
    ],
  },
  {
    id: "modern-music",
    title: "Modern & Pop Arrangements",
    videos: [
      // {
      //   id: 7,
      //   image: Image7,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID7",
      //   title: "Indie Cover",
      //   subtitle: "Acoustic Session",
      // },
      // {
      //   id: 8,
      //   image: Image8,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID8",
      //   title: "Pop Piano",
      //   subtitle: "Live Studio Recording",
      // },
      // {
      //   id: 9,
      //   image: Image9,
      //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID9",
      //   title: "Cinematic Arrangement",
      //   subtitle: "Film Score Performance",
      // },
    ],
  },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-30 p-10 bg-[var(--bgColour)]">
      <div className="absolute inset-0 bg-grain"></div>
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {portfolioSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 text-sm font-semibold text-[var(--bgColour)] bg-[var(--textColour)] hover:text-[var(--textColour)] hover:bg-[var(--keyColour)] shadow-md transition-transform transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--keyColour)]"
            >
              {section.title}
            </a>
          ))}
        </div>

        {portfolioSections.map((section) => (
          <section key={section.id} id={section.id} className="mb-16">
            <h2 className="text-4xl font-bold text-[var(--keyColour)] text-center mb-8">
              {section.title}
            </h2>
            {section.videos.length === 0 ? (
              <p className="text-center text-lg text-[var(--textColour)]">
                Looks like this section is still warming up, no videos just yet!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.videos.map((item) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => openModal(item.video)}
                  >
                    <Suspense fallback={<Loading />}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-80 object-cover border-4 border-[var(--textColour)]"
                      />
                    </Suspense>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent px-4 py-3 text-white">
                      <p className="text-xl font-bold">{item.title}</p>
                      <p className="text-sm opacity-80">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 md:p-0 p-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onClick={closeModal}
          >
            <div
              className="relative bg-white shadow-2xl max-w-2xl w-full p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 -right-8 text-white text-3xl font-bold p-2 hover:text-red-600 transition duration-300"
                onClick={closeModal}
                aria-label="Close video"
              >
                ×
              </button>
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[400px]"
                  src={currentVideo}
                  title="Portfolio Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
