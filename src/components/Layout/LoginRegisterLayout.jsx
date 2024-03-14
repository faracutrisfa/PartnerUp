import React from "react";
import Footer from "../Partials/Footer";
import NavbarLoginRegister from "../Partials/NavbarLoginRegister";

const LoginRegisterLayout = ({ children }) => {
    return (
      <div className="pt-10 ">
        <NavbarLoginRegister />
        {children}
        <Footer />
      </div>
    );
  };

export default LoginRegisterLayout;