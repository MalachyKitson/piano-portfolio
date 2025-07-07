import React, { useState, useEffect } from "react";

const Music = () => {
  const [videos, setVideos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const sampleIds = [
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
        "Hki6RqI-eMA",
    ];

    const videoList = sampleIds.map((videoId, index) => ({
      id: index + 1,
      videoId,
      video: `https://www.youtube.com/embed/${videoId}`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    }));

    setVideos(videoList);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  const chunkVideos = (videos, size) => {
    const chunks = [];
    for (let i = 0; i < videos.length; i += size) {
      chunks.push(videos.slice(i, i + size));
    }
    return chunks;
  };

  const rows = chunkVideos(videos, columns);

  return (
    <section className="w-full min-h-screen bg-[var(--bgColour)] flex items-center justify-center p-10 pt-30">
      {videos.length === 0 ? (
        <p className="text-[var(--textColour)] text-center text-lg">
          NO VIDEOS HERE YET.
        </p>
      ) : (
        <div className="w-full max-w-screen-xl flex flex-col gap-4 md:gap-0 p-4">
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            const isFullRow = row.length === columns;

            return (
              <div
                key={index}
                className={`flex gap-4 md:gap-0 flex-wrap ${
                  isFullRow ? "justify-start" : "justify-center"
                }`}
              >
                {row.map((video) => (
                  <div
                    key={video.id}
                    className={`w-full aspect-[16/9] transition-transform duration-300 hover:scale-120 cursor-pointer ${
                      columns === 1
                        ? ""
                        : columns === 2
                        ? "sm:w-[48%]"
                        : "lg:w-[32.5%]"
                    }`}
                    onClick={() => openModal(video.video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt="Video Thumbnail"
                    loading="lazy"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

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
              className="absolute -top-10 right-0 md:-right-2 lg:-right-10 text-[var(--textColour)] hover:text-[var(--keyColour)] text-3xl font-bold transition-colours duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <iframe
              className="w-full aspect-[16/9]"
              src={currentVideo}
              title="Music Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Music;
