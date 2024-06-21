import { getUsers, setEnabled, setType } from "../../../services/Userservice";
import { getValueType, getTypeByLabel } from "../../../utils/Utils";

export const getUserData = async (setUsers) => {
  try {
    const response = await getUsers();

    if (response.status === 200) {
      if (response.data.length === 0) {
        return "No existen datos de usuarios, actualmente...";
      }

      let users = response.data;
      users = users.map((user) => {
        user.enabled = user.enabled === 1 ? "Si" : "No";
        user.type = getValueType(user.type);
        return user;
      });

      setUsers(users);
      return null;
    }
    throw createError("Error consultando usuarios:", response);
  } catch (error) {
    throw createError(
      "Error consultando usuarios",
      `[${error.response.status}]: ${error?.response?.data?.detail?.error}`
    );
  }
};

export const enableUser = async (item) => {
  try {
    const enabled = item.enabled === "Si" ? 0 : 1;
    const type = getTypeByLabel(item.type);
    const response = await setEnabled({
      ...item,
      enabled: enabled,
      type: type,
    });
    if (response.status === 200) {
      return `[ ${item.login} ]: Cambio el estado -> ${
        !item.enabled ? "Activo" : "Inactivo"
      }`;
    }
    throw createError("Error activando usuario:", response);
  } catch (error) {
    throw createError(
      "Error activando usuario",
      `[${error.response.status}]: ${error?.response?.data?.detail?.error}`
    );
  }
};

export const typeUser = async (item) => {
  try {
    const enabled = item.enabled === "Si" ? 0 : 1;
    const type = getTypeByLabel(item.type);
    const response = await setType({ ...item, enabled: enabled, type: type });

    if (response.status === 200) {
      return `[ ${item.login} ]: Cambio el tipo de usuario -> ${getValueType(
        item.type
      )}`;
    }

    throw createError("Error cambiando el tipo de usuario:", response);
  } catch (error) {
    throw createError(
      "Error cambiando el tipo de usuario",
      `[${error.response.status}]: ${error?.response?.data?.detail?.error}`
    );
  }
};

const createError = (msgUser, msgSys) => {
  console.error(`${msgUser}: ${msgSys}`);
  return new Error(JSON.stringify([msgUser, msgSys]));
};
