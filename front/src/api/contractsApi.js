import axios from "axios";

export const fetchContracts = async (cnpj) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/contracts/${cnpj}`);
    return response;
  } catch (err) {
    throw err;
  }
};
