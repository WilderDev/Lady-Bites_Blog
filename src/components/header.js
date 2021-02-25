import React from "react";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Styles from "../styles/components/header.module.scss";

const Header = () => (
  <nav role="navigation" aria-label="Main" className={Styles.containerNav}>
    <div>
      <ul>
        <li>
          <Link to="/">
            {/* <StaticImage
              src="../images/cookie-logo.png"
              alt="Quater Eaten Cookie Illustration"
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={200}
            /> */}
          </Link>
        </li>
      </ul>
    </div>
    <div>
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
    </div>
  </nav>
);

export default Header;
