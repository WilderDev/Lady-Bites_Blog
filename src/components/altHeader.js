import React from "react";
import { Link } from "gatsby";

import Styles from "../styles/components/altHeader.module.scss";

const AltHeader = () => {
  return (
    <nav className={Styles.containerNav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div>|</div>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <div>|</div>
        <li>
          <Link to="/about">About</Link>
        </li>
        <div>|</div>
        <li>
          <Link to="/learning">Learning</Link>
        </li>
        <div>|</div>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AltHeader;
