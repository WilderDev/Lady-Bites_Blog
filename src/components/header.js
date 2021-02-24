import React from "react";
import { Link } from "gatsby";

// import Styles from "../styles/HomePage.module.scss";

const Header = () => (
  <nav aria-labelledby="Main Navigation Menu">
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
