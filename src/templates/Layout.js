import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../../styles/global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
