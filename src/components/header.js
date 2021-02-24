import React from "react";
import { Link } from "gatsby";

// import Styles from "../styles/HomePage.module.scss";

const Header = () => (
  <nav role="navigation" aria-label="Main">
    <div>
      <ul>
        <li>
          <Link to="/">
            <i>&#9673;</i> Lady Logo
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <Link to=""></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
