import React from "react";
import { Link } from "gatsby";

import Styles from "../styles/components/altHeader.module.scss";

const AltHeader = () => {
  return (
    <nav className={Styles.containerNav}>
      <h1>Alt Header</h1>
    </nav>
  );
};

export default AltHeader;
