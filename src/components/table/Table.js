import React from "react";
import styles from "./Table.module.css";

const Table = ({ columns, data, btnLabel = null, btnAction = null }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns &&
            columns.map((item, index) => (
              <th key={`${item}-${index}`}>{item}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.login}</td>
              <td>**********</td>
              <td>{item.enabled ? "Si" : "No"}</td>
              <td>
                <button
                  onClick={() => btnAction(item)}
                  className={styles.btnAction}
                >
                  {btnLabel}
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
