import React, { useCallback, useEffect, useState } from "react";

import Table from "../../../components/table/Table";
import Alert from "../../../components/alert/Alert";
import { enableUser, getUserData } from "./UserStore";

import styles from "./User.module.css";

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

  useEffect(() => {
    const getData = async () => {
      try {
        setAlert(null, "SUCCESS");

        const response = await getUserData(setUsers);
        if (response) {
          setAlert(response, "INFO");
        }
      } catch (error) {
        setAlert(error.message, "ERROR");
      }
    };

    getData();
  }, [setUsers, setAlert]);

  const handleChangeEnabled = async (item) => {
    try {
      setAlert(null, "SUCCESS");

      const response = await enableUser(item);
      if (response) {
        setAlert(response, "INFO");
        await getUserData(setUsers, setAlert);
      }
    } catch (error) {
      setAlert(error.message, "ERROR");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Usuarios</div>
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
