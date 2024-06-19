import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ messages }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.message_short}>user:</div>
      <div className={styles.message}>{messages[0]?.text}</div>
      <div className={styles.message_short}>sys:</div>
      <div className={styles.message}>{messages[1]?.text}</div>
    </footer>
  );
};

export default Footer;
