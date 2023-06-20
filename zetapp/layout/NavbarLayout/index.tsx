import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NavbarLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavbarLayout;
