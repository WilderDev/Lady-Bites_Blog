import React from "react";

import Styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <small>&copy; {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
