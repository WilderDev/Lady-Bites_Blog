import React from "react";
import { Link } from "gatsby";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

import Styles from "../styles/components/header.module.scss";

const Header = () => (
  <nav role="navigation" aria-label="Main" className={Styles.containerNav}>
    <ul>
      <li>
        <Link paintDrip hex="#003d4e" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link paintDrip hex="#fff691" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link paintDrip hex="#b8caff" to="/learning">
          Learning
        </Link>
      </li>
      <li>
        <Link paintDrip hex="#abedff" to="/recipes">
          Recipes
        </Link>
      </li>
    </ul>
    {/* </div> */}
  </nav>
);

export default Header;
