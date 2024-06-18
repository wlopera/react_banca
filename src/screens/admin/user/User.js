import React, { useCallback, useEffect, useState } from "react";

import Table from "../../../components/table/Table";
import Alert from "../../../components/alert/Alert";
import { enableUser, getUserData, typeUser } from "./UserStore";
import GenericModal from "../../../components/modal";

import styles from "./User.module.css";

const columns = [
  "ID",
  "Usuario",
  "Contraseña",
  "Activo",
  "Tipo",
  "Activar Usuario",
  "Tipo de Usuario",
];

const User = () => {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState({ text: null, type: "SUCCESS" });
  const [show, setShow] = useState(false);

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

  const handleTypeUser = (user) => {
    setCurrentUser(user);
    setShow(true);
  };

  const handleProcess = async () => {
    try {
      setAlert(null, "SUCCESS");

      const response = await typeUser(currentUser);
      if (response) {
        setAlert(response, "INFO");
        await getUserData(setUsers, setAlert);
      }
      setShow(false);
    } catch (error) {
      setAlert(error.message, "ERROR");
      setShow(false);
    }
  };

  const modal = (
    <GenericModal
      title={currentUser && currentUser.login}
      show={show}
      otherStyles={{ maxWidth: "280px" }}
    >
      <div className={styles.modal}>
        <div className={styles.body}>
          <div className={styles.type}>
            Tipo de cliente:
            <select
              name="select"
              className={styles.select}
              value={currentUser.type}
              onChange={(item) =>
                setCurrentUser((prevUser) => ({
                  ...prevUser,
                  type: item.target.value,
                }))
              }
            >
              <option value="admin">Administrador</option>
              <option value="bankteller">Cajero</option>
              <option value="client">Cliente</option>
            </select>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              handleProcess();
            }}
            className={styles.btnProcess}
          >
            Procesar
          </button>
          <button onClick={() => setShow(false)} className={styles.btnCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </GenericModal>
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Usuarios</div>
      {message?.text && <Alert message={message} />}
      <Table
        columns={columns}
        data={users}
        btnEnabledLabel="Activar/Desactivar"
        btnEnabledAction={handleChangeEnabled}
        btnTypeLabel="Modificar"
        btnTypeAction={handleTypeUser}
      />
      {modal}
    </div>
  );
};

export default User;
