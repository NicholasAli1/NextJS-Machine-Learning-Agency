import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nicholas</div>
      <div className={styles.text}>
        Nicholas machine learning agency &copy; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
