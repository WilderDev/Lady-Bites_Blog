import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Styles from "../styles/components/header.module.scss";

const Header = () => (
  <nav role="navigation" aria-label="Main" className={Styles.containerNav}>
    <ul>
      <li>
        <AniLink paintDrip hex="#003d4e" to="/blog">
          Blog
        </AniLink>
      </li>
      <li>
        <AniLink paintDrip hex="#fff691" to="/about">
          About
        </AniLink>
      </li>
      <li>
        <AniLink paintDrip hex="#b8caff" to="/learning">
          Learning
        </AniLink>
      </li>
      <li>
        <AniLink paintDrip hex="#abedff" to="/recipes">
          Recipes
        </AniLink>
      </li>
    </ul>
    {/* </div> */}
  </nav>
);

export default Header;
