import React, { useState, useEffect } from "react";

const MusicDirect = () => {
  const [videos, setVideos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const latestVideos = [
      {
        id: 1,
        video: "https://www.youtube.com/embed/XdFpzaM07i0?si=lG4kz3s8omk6BeJq",
        thumbnail: "https://img.youtube.com/vi/XdFpzaM07i0/hqdefault.jpg",
      },
      {
        id: 2,
        video: "https://www.youtube.com/embed/Hki6RqI-eMA?si=pTQO2CJm-MmdFYRi",
        thumbnail: "https://img.youtube.com/vi/Hki6RqI-eMA/hqdefault.jpg",
      },
      {
        id: 3,
        video: "https://www.youtube.com/embed/Qt6YiVZLhG0?si=CQgxlbvB0pOkpz5U",
        thumbnail: "https://img.youtube.com/vi/Qt6YiVZLhG0/hqdefault.jpg",
      },
    ];
    setVideos(latestVideos);
  }, []);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="w-full bg-[var(--bgColour)] py-12 px-4">
      <h2 className="text-5xl font-bold text-center text-[var(--textColour)] mb-8">
        LATEST VIDEOS
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] max-w-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(video.video)}
          >
            <div className="aspect-[16/9]">
              <img
                src={video.thumbnail}
                alt="Music video thumbnail"
                className="w-full h-full object-cover border-4 border-[var(--textColour)]"
              />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl bg-[var(--textColour)] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 md:-right-2 lg:-right-10 text-[var(--textColour)] text-3xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="">
              <iframe
                className="w-full aspect-[16/9]"
                src={currentVideo}
                title="Latest Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicDirect;
