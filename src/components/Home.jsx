import React, { Suspense } from "react";
import Hero from "../components/Hero";

const Loading = React.lazy(() => import("../components/Loading"));
const Bio = React.lazy(() => import("../components/Bio"));
const PortfolioDirect = React.lazy(() =>
  import("../components/PortfolioDirect")
);

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <PortfolioDirect />
      </Suspense>
    </div>
  );
};

export default Home;
