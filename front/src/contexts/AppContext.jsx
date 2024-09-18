import { createContext, useState, useEffect } from 'react';

// Criação do contexto
const AppContext = createContext({
  user: null,
  contracts: [],
  invoice: null,
  setUserData: () => {},
  setContracts: () => {},
  setInvoiceData: () => {},
});

// Função para obter dados do localStorage
const getDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

export const AppProvider = ({ children }) => {
  // Estado para armazenar os dados do usuário, contratos e invoice
  const [user, setUser] = useState(getDataFromLocalStorage('user') || null);
  const [contracts, setContracts] = useState(getDataFromLocalStorage('contracts') || []);
  const [invoice, setInvoice] = useState(getDataFromLocalStorage('invoice') || null);

  // Atualiza o localStorage quando os dados são alterados
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (contracts.length > 0) {
      localStorage.setItem('contracts', JSON.stringify(contracts));
    } else {
      localStorage.removeItem('contracts');
    }
  }, [contracts]);

  useEffect(() => {
    if (invoice) {
      localStorage.setItem('invoice', JSON.stringify(invoice));
    } else {
      localStorage.removeItem('invoice');
    }
  }, [invoice]);

  return (
    <AppContext.Provider value={{ user, contracts, invoice, setUserData: setUser, setContracts, setInvoiceData: setInvoice }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

