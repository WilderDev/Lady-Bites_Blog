import React from "react";

import Styles from "../styles/components/footer.module.scss";
import { AiFillUpCircle } from "@react-icons/all-files/ai/AiFillUpCircle";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <small>
        Lauren Wilder - Lady Bites &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
