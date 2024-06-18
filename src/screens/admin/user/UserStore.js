import { getUsers, setEnabled } from "../../../services/Userservice";

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

    console.error("Error consultando usuarios", response);
    throw new Error(`[${response.status}]: Error consultando usuarios`);
  } catch (error) {
    console.error("Error consultando usuarios:", error);
    throw new Error(`[${error.response.status}]: Error consultando usuarios`);
  }
};

export const enableUser = async (item) => {
  try {
    const response = await setEnabled({ ...item, enabled: !item.enabled });

    if (response.status === 200) {
      return `[${response.status}]: Usuario actualizado - ${item.login}`;
    }

    console.error("Error activando usuario", response);
    throw new Error(`[${response.status}]: Error activando usuario`);
  } catch (error) {
    console.error("Error activando usuario:", error);
    throw new Error(`[${error.response.status}]: Error activando usuario`);
  }
};
