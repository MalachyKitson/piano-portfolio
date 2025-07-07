import React from "react";

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-[var(--bgColour)] text-[var(--textColour)]"
      role="status"
      aria-label="Loading"
    >
      <div class="loader"></div>
    </div>
  );
};

export default Loading;
