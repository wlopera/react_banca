import React from "react";
import styles from "./Table.module.css";

const Table = ({ columns, rows, columnsAction = null, actions = null }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns &&
            columns.map((column, index) =>
              column.show ? (
                <th key={`${column.accesor} -${index}`}>{column.header}</th>
              ) : null
            )}
          {columnsAction &&
            columnsAction.map((column, index) => (
              <th key={`${column} -${index}`}>{column}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) =>
                column.show ? (
                  <td key={column.accessor}>{row[column.accessor]}</td>
                ) : null
              )}
              {actions &&
                actions.map((btn, index) => (
                  <td key={`${btn.label} -${index}`}>
                    <button
                      onClick={() => {
                        btn.onClick(row);
                      }}
                      className={styles.btnAction}
                    >
                      {btn.label}
                    </button>
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
