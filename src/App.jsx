import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

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
  );
}

export default App;
