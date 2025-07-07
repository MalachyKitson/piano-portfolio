import React, { Suspense } from "react";
import Hero from "../components/Hero";

const Loading = React.lazy(() => import("../components/Loading"));
const MusicDirect = React.lazy(() =>
  import("../components/MusicDirect")
);

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <MusicDirect />
      </Suspense>
    </div>
  );
};

export default Home;
