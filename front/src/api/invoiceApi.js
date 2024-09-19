import axios from "axios";

export const sendData = async (invoiceData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/upload-invoice",  invoiceData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

