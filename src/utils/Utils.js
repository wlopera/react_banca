export const getValueType = (type) => {
  switch (type) {
    case "admin":
      return "Administrador";

    case "bankteller":
      return "Cajero";

    case "client":
      return "Cliente";

    default:
      return "Cliente";
  }
};
