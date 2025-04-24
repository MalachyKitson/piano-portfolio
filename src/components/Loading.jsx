import React from "react";

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-[var(--bgColour)] text-[var(--textColour)]"
      role="status"
      aria-label="Loading"
    >
      <h1 className="text-xl font-normal mb-4 animate-pulse">LOADING...</h1>
    </div>
  );
};

export default Loading;
