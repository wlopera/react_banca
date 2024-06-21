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

export const getTypeByLabel = (label) => {
  switch (label) {
    case "Administrador":
      return "admin";

    case "Cajero":
      return "bankteller";

    case "Cliente":
      return "client";

    default:
      return "client";
  }
};
