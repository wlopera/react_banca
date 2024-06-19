import { getUsers, setEnabled, setType } from "../../../services/Userservice";
import { getValueType } from "../../../utils/Utils";

export const getUserData = async (setUsers) => {
  try {
    const response = await getUsers();

    if (response.status === 200) {
      if (response.data.length === 0) {
        return "No existen datos de usuarios, actualmente...";
      }

      setUsers(response.data);
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
    const response = await setEnabled({ ...item, enabled: !item.enabled });
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
    const response = await setType({ ...item, type: item.type });

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
