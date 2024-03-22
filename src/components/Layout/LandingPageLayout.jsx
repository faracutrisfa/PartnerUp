import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";

const LandingPageLayout = ({ children }) => {
    return (
      <div className="pt-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };

export default LandingPageLayout;