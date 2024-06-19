import React from "react";
import styles from "./Body.module.css";

const Body = ({ children }) => {
  return <main className={styles.body}>{children}</main>;
};

export default Body;
