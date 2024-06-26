import React from "react";
import styles from "./Table.module.css";
import { getValueType } from "../../utils/Utils";

const Table = ({
  columns,
  data,
  btnEnabledLabel = null,
  btnEnabledAction = null,
  btnTypeLabel = null,
  btnTypeAction = null,
}) => {
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
              <td>{getValueType(item.type)}</td>
              <td>
                <button
                  onClick={() => btnEnabledAction(item)}
                  className={styles.btnAction}
                >
                  {btnEnabledLabel}
                </button>
              </td>
              <td>
                <button
                  onClick={() => btnTypeAction(item)}
                  className={styles.btnAction}
                >
                  {btnTypeLabel}
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
