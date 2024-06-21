import React, { useEffect, useState } from "react";

import { enableUser, getUserData, typeUser } from "./UserStore";
import Table from "../../../components/table/Table";
import GenericModal from "../../../components/modal";
import { observer } from "mobx-react";
import store from "../../../store/store";

import styles from "./User.module.css";

const columns = [
  { header: "ID", accessor: "id", show: true },
  { header: "USUARIO", accessor: "login", show: true },
  { header: "CONTRASEÑA", accessor: "password", show: true },
  { header: "ACTIVO", accessor: "enabled", show: true },
  { header: "TIPO", accessor: "type", show: true },
];

const User = () => {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cmbType, setCmbType] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        store.initMessages();
        const response = await getUserData(setUsers);
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
  }, [setUsers]);

  const handleChangeEnabled = async (item) => {
    try {
      store.initMessages();
      const response = await enableUser(item);
      if (response) {
        store.setMessages([{ text: response, type: "INFO" }, {}]);
        await getUserData(setUsers);
      }
    } catch (error) {
      const err = JSON.parse(error.message);
      store.setMessages([
        { text: err?.[0], type: "ERROR" },
        { text: err?.[1], type: "ERROR" },
      ]);
    }
  };

  const handleTypeUser = (user) => {
    store.initMessages();
    setCurrentUser(user);
    setShow(true);
    setCmbType(user.type);
  };

  const handleProcess = async () => {
    try {
      const response = await typeUser(currentUser);
      if (response) {
        store.setMessages([{ text: response, type: "INFO" }, {}]);
        await getUserData(setUsers);
      }
      setShow(false);
    } catch (error) {
      const err = JSON.parse(error.message);
      store.setMessages([
        { text: err?.[0], type: "ERROR" },
        { text: err?.[1], type: "ERROR" },
      ]);
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
              onChange={(item) => {
                return setCurrentUser((prevUser) => ({
                  ...prevUser,
                  type: item.target.value,
                }));
              }}
            >
              <option value="Administrador">Administrador</option>
              <option value="Cajero">Cajero</option>
              <option value="Cliente">Cliente</option>
            </select>
          </div>
        </div>
        <div className={styles.buttons}>
          {cmbType && cmbType !== currentUser.type && (
            <button
              onClick={() => {
                handleProcess();
              }}
              className={styles.btnProcess}
            >
              Procesar
            </button>
          )}

          <button onClick={() => setShow(false)} className={styles.btnCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </GenericModal>
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Usuarios</div>
        <Table
          columns={columns}
          rows={users}
          columnsAction={["Activar usuario", "Tipo de UsUario"]}
          actions={[
            { label: "Activar/Desactivar", onClick: handleChangeEnabled },
            { label: "Modificar", onClick: handleTypeUser },
          ]}
        />
        {modal}
      </div>
    </div>
  );
};

export default observer(User);
