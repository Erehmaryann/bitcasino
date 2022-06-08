import React, { lazy } from "react";
const Footer = lazy(() => import("./component/Footer"));
const Header = lazy(() => import("./component/Header"));
const Hero = lazy(() => import("./component/Hero"));

function App() {
  return (
    <>
      <div className="bg-primary relative main overflow-hidden">
        <div className="container-fluid pt-6 lg:pl-32 lg:pr-28">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="container-fluid py-6 lg:pl-32 bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
