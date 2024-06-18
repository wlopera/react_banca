import React, { useCallback, useEffect, useState } from "react";

import { getUsers, setEnabled } from "../../../services/Userservice";

import Table from "../../../components/table/Table";

import styles from "./User.module.css";
import Alert from "../../../components/alert/Alert";

const columns = ["ID", "Usuario", "Contraseña", "Activo", "Acción"];

const User = () => {
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState({ text: null, type: "SUCCESS" });

  const setAlert = useCallback((text, type) => {
    setMessage({
      text,
      type,
    });
  }, []);

  const getData = useCallback(async () => {
    try {
      setAlert(null, "SUCCESS");
      const response = await getUsers();
      if (response.status === 200) {
        if (response.data.length === 0) {
          setAlert(`No existen datos de usuarios, actualmente...`, "INFO");
        } else {
          setUsers(response.data);
        }
      } else {
        setAlert(`[${response.status}]: Error consultando usuarios`, "ERROR");
        console.error("Error consultando usuarios", response);
      }
    } catch (error) {
      console.error("Error consultando usuarios:", error);
      setAlert(
        `[${error.response.status}]: Error consultando usuarios`,
        "ERROR"
      );
    }
  }, [setAlert]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChangeEnabled = useCallback(
    async (item) => {
      try {
        setAlert(null, "SUCCESS");
        const response = await setEnabled({ ...item, enabled: !item.enabled });
        if (response.status === 200) {
          getData();
          setAlert(
            `[${response.status}]: Usuario actualizado - ${item.login}`,
            "INFO"
          );
        } else {
          console.error("Error activando usuario", response);
          setAlert(`[${response.status}]: Error activando usuario`, "ERROR");
        }
      } catch (error) {
        console.error("Error activando usuario:", error);
        setAlert(
          `[${error.response.status}]: Error activando usuario`,
          "ERROR"
        );
      }
    },
    [getData, setAlert]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Usuarios</div>
      {/* {error && <div className={styles.alert}>{error}</div>} */}
      {message?.text && <Alert message={message} />}
      <Table
        columns={columns}
        data={users}
        btnLabel="Activar/Desactivar"
        btnAction={handleChangeEnabled}
      />
    </div>
  );
};

export default User;
