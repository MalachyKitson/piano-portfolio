import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Music = React.lazy(() => import("./components/Music"));
const Contact = React.lazy(() => import("./components/Contact"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    setLoaded(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Malachy Kitson | Official Website</title>
        <meta
          name="description"
          content="Official website of Malachy Kitson — Irish singer-songwriter and recording artist. Listen to music, watch videos, and get the latest updates."
        />
          <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Malachy Kitson",
      "url": "https://malachykitsonmusic.com",
      "sameAs": [
        "https://www.instagram.com/malachykitsonmusic",
        "https://www.youtube.com/@malachykitsonmusic",
        "https://www.tiktok.com/@malachykitsonmusic"
      ],
      "jobTitle": "Singer-Songwriter",
      "description": "Malachy Kitson is a musician and singer-songwriter.",
      "gender": "Male"
    }
    `}
  </script>
      </Helmet>
      <Router>
      <Header loaded={loaded} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
    </>
  );
}

export default App;
