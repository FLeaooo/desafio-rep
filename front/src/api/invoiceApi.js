import axios from "axios";

export const sendData = async (invoiceData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/invoices",  invoiceData);
    return response;
  } catch (err) {
    throw err;
  }
};

