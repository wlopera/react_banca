import React from "react";

import styles from "./GenericModal.module.css";

const GenericModal = ({ title, show, otherStyles, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.container} style={otherStyles}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default GenericModal;
