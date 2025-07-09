import React, { Suspense } from "react";
import Hero from "../components/Hero";

import { Helmet } from 'react-helmet';

const Loading = React.lazy(() => import("../components/Loading"));
const MusicDirect = React.lazy(() =>
  import("../components/MusicDirect")
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Malachy Kitson",
  "url": "https://malachykitsonmusic.com",
  "image": "/music-solid.svg",
  "description": "Malachy Kitson is a musician & singer-songwriter.",
  "brand": {
    "@type": "Person",
    "name": "Malachy Kitson"
  },
  "sameAs": [
    "https://www.instagram.com/malachykitsonmusic",
    "https://www.youtube.com/@malachykitsonmusic",
    "https://www.tiktok.com/@malachykitsonmusic"
  ],
  "jobTitle": "Artist Musician Singer-Songwriter",
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Malachy Kitson | Official Website",
  "url": "https://malachykitsonmusic.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://malachykitsonmusic.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Malachy Kitson | Home</title>
        <meta name="description" content="Official website of Malachy Kitson – Irish artist & singer-songwriter. Listen to music, watch videos, and get the latest updates." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
          {JSON.stringify(websiteData)}
        </script>
      </Helmet>
      <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <MusicDirect />
      </Suspense>
    </div>
    </>
  );
};

export default Home;
