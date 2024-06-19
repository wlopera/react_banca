import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ messages }) => {
  const getStyle = () => {
    switch (messages[0]?.type) {
      case "SUCCESS":
        return styles.success;

      case "INFO":
        return styles.info;

      case "ERROR":
        return styles.error;

      default:
        return styles.default;
    }
  };

  return (
    <footer className={styles.footer}>
      {messages[0]?.type && <div className={styles.message_short}>user:</div>}
      <div className={styles.message}>
        <div className={getStyle()}>{messages[0]?.text}</div>
      </div>
      {messages[1]?.type && <div className={styles.message_short}>sys:</div>}
      <div className={styles.message}>{messages[1]?.text}</div>
    </footer>
  );
};

export default Footer;
