import axios from "axios";

export const loginUser = async (cnpj) => {
  const cnpjString = cnpj.toString();
  try {
    const response = await axios.post("http://localhost:3000/api/user", { cnpj: cnpjString });
    return response;
  } catch (err) {
    throw err;
  }
};

