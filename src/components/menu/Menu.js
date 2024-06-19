import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ title, data, onSelected, selectedOption }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.title}>{title}</div>
      <ul>
        {data &&
          data.map((item) => (
            <li
              key={item.key}
              className={
                selectedOption === item.component ? styles.selected : ""
              }
              onClick={() => {
                onSelected(item.component);
              }}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
