import React from "react";

import styles from "./Alert.module.css";

const Alert = ({ message }) => {
  const getStyle = () => {
    switch (message.type) {
      case "SUCCESS":
        return styles.success;

      case "INFO":
        return styles.info;

      case "ERROR":
        return styles.error;

      default:
        return styles.info;
    }
  };

  return (
    <div className={styles.container}>
      <div className={getStyle()}>{message.text}</div>
    </div>
  );
};

export default Alert;
