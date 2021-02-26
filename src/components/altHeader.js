import React from "react";
import { Link } from "gatsby";

import Styles from "../styles/components/altHeader.module.scss";

const AltHeader = () => {
  return (
    <nav className={Styles.containerNav}>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/learning">Learning</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AltHeader;
