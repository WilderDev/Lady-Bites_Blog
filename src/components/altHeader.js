import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Styles from "../styles/components/altHeader.module.scss";

const AltHeader = () => {
  return (
    <nav className={Styles.containerNav}>
      <ul>
        <li>
          <AniLink paintDrip hex="#010203" to="/">
            Home
          </AniLink>
        </li>
        <div>|</div>
        <li>
          <AniLink paintDrip hex="#003d4e" to="/blog">
            Blog
          </AniLink>
        </li>
        <div>|</div>
        <li>
          <AniLink paintDrip hex="#fff691" to="/about">
            About
          </AniLink>
        </li>
        <div>|</div>
        <li>
          <AniLink paintDrip hex="#b8caff" to="/learning">
            Learning
          </AniLink>
        </li>
        <div>|</div>
        <li>
          <AniLink paintDrip hex="#abedff" to="/recipes">
            Recipes
          </AniLink>
        </li>
      </ul>
    </nav>
  );
};

export default AltHeader;
