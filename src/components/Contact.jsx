import React, { Suspense } from "react";
const Loading = React.lazy(() => import("../components/Loading"));

const LazyFaEnvelope = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope }))
);

const Contact = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "Email Not Available";

  const handleEmailClick = (e) => {
    if (!import.meta.env.VITE_CONTACT_EMAIL) {
      e.preventDefault();
      console.error("Email address not configured");
      alert("Email address is not configured. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full h-screen bg-[var(--bgColour)] text-[var(--textColour)] px-6">
      <div className="absolute inset-0 bg-grain"></div>
      <h1 className="text-3xl font-bold text-[var(--keyColour)] mb-6">
        CONTACT ME
      </h1>
      <a
        onClick={handleEmailClick}
        href={`mailto:${email}`}
        className="flex items-center space-x-4 text-xl hover:text-[var(--keyColour)] transition mb-6"
      >
        <Suspense fallback={<Loading />}>
          <LazyFaEnvelope size={24} />
        </Suspense>
        <span>{email}</span>
      </a>
    </div>
  );
};

export default Contact;
