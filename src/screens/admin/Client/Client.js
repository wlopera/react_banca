import React, { useEffect, useState } from "react";

import { getClientData } from "./ClientStore";
import Table from "../../../components/table";
import { observer } from "mobx-react";
import store from "../../../store/store";

import styles from "./Client.module.css";

const columns = [
  { header: "ID", accessor: "id", show: true },
  { header: "IDENTIFICACION", accessor: "identification", show: true },
  { header: "NOMBRE", accessor: "name", show: true },
  { header: "CORREO", accessor: "email", show: true },
  { header: "TELEFONO", accessor: "phone", show: true },
];

const Client = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        store.initMessages();
        const response = await getClientData(setClients);
        if (response) {
          store.setMessages([{ text: response, type: "INFO" }, {}]);
        }
      } catch (error) {
        const err = JSON.parse(error.message);
        store.setMessages([
          { text: err?.[0], type: "ERROR" },
          { text: err?.[1], type: "ERROR" },
        ]);
      }
    };

    getData();
  }, [setClients]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Clientes</div>
        {
          <Table
            columns={columns}
            rows={clients}
            columnsAction={["Acción", "Acción"]}
            actions={[
              {
                label: "Modificar",
                onClick: () => {
                  console.log("Modificar cliente");
                },
              },
              {
                label: "Consultar",
                onClick: () => {
                  console.log("Consultar cliente");
                },
              },
            ]}
          />
        }
      </div>
    </div>
  );
};

export default observer(Client);
