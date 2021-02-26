import React from "react";

import AltHeader from "./altHeader";
import Footer from "./footer";

import "../styles/global.css";
import Styles from "../styles/components/altLayout.module.scss";

const AltLayout = ({ children }) => {
  return (
    <>
      <AltHeader />
      <main className={Styles.mainGroup}>{children}</main>
      <Footer />
    </>
  );
};

export default AltLayout;
