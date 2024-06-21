import { getClients } from "../../../services/Clientservice";

export const getClientData = async (setClients) => {
  try {
    const response = await getClients();

    if (response.status === 200) {
      if (response.data.length === 0) {
        return "No existen datos de clientes, actualmente...";
      }

      setClients(response.data);
      return null;
    }
    throw createError("Error consultando clientes:", response);
  } catch (error) {
    throw createError(
      "Error consultando clientes",
      `[${error.response.status}]: ${error?.response?.data?.detail?.error}`
    );
  }
};

const createError = (msgUser, msgSys) => {
  console.error(`${msgUser}: ${msgSys}`);
  return new Error(JSON.stringify([msgUser, msgSys]));
};
