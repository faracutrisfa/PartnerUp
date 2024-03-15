import React from "react";
import Footer from "../Partials/Footer";
import NavbarMain from "../Partials/NavbarMain";

const MainLayout = ({ children }) => {
    return (
      <div className="pt-10 ">
        <NavbarMain />
        {children}
        <Footer />
      </div>
    );
  };

export default MainLayout;