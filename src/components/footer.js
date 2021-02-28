import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <small>
        Lauren Wilder - Lady Bites &copy; {new Date().getFullYear()}
      </small>
      <StaticImage
        src="../images/ladybird.png"
        alt="Lil' Ladybug on a chewed leaf"
        placeholder="tracedSVG"
        layout="fixed"
        loading="lazy"
      />
    </footer>
  );
};

export default Footer;
