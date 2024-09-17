import { createContext, useState, useEffect } from 'react';

const UserContext = createContext({
  cnpj: '',
  businessName: '',
  tradingName: '',
  setUserData: () => {},
});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    cnpj: '',
    businessName: '',
    tradingName: '',
  });

  // Restaurar os dados do localStorage ao carregar o componente
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  // Salvar os dados no localStorage sempre que forem atualizados
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

