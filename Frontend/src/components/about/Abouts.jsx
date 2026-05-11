import React from "react";
import Navbar from "../Navbar";
import About from "../About";
import Footer from "../Footer";

function Abouts() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default Abouts;
