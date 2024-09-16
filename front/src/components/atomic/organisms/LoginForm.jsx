import React, { useState } from "react";


const LoginForm = () => {
  const [cnpj, setCnpj] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("CNPJ:", cnpj);
  };

  return (
    <form onSubmit={handleLogin} className="p-6 mx-[80px] mx-auto text-left w-[80%]">
      <div className="mb-4">
        <label htmlFor="cnpj" className="text-gray-700 font-bold mb-2">CNPJ</label>
        <input
          type="text"
          id="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="Digite seu CNPJ"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition duration-300"
        type="submit"
      >
        Acessar
      </button>
    </form>
  );
};

export default LoginForm;


