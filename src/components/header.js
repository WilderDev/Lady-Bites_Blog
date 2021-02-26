import React from "react";
import { Link } from "gatsby";

import Styles from "../styles/components/header.module.scss";

const Header = () => (
  <nav role="navigation" aria-label="Main" className={Styles.containerNav}>
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
    {/* </div> */}
  </nav>
);

export default Header;
