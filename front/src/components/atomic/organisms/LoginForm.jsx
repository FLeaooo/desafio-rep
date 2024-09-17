import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '@/api/userApi'
import axios from "axios";
import UserContext from '@/contexts/UserContext'


const LoginForm = () => {
  const [cnpjLogin, setCnpjLogin] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { cnpj, businessName, tradingName, setUserData } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginUser(cnpjLogin)

      console.log(response.data)
      if (response.status == 200) {
        setUserData({
          cnpj: response.data.cnpj,
          businessName: response.data.businessName,
          tradingName: response.data.tradingName,
        });
        navigate("/contracts");
      }
    } catch (err) {
      if (err.status == 404) {
        setError("CNPJ inválido");
      } else {
        setError("Algo inesperado ocorreu");
      }
      console.error(err);
    }  };

  return (
    <form onSubmit={handleLogin} className="p-6 mx-[80px] mx-auto text-left w-[80%]">
      <div className="mb-4">
        <label htmlFor="cnpjLogin" className="text-gray-700 font-bold mb-2">CNPJ</label>
        <input
          type="text"
          id="cnpjLogin"
          onChange={(e) => setCnpjLogin(e.target.value)}
          placeholder="Digite seu CNPJ"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <button
        className={`bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition duration-300`}
        type="submit"
      >
        Acessar
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default LoginForm;

