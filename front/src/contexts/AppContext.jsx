import { createContext, useState, useEffect } from 'react';

// Criação do contexto
const AppContext = createContext({
  user: null,
  contracts: [],
  setUserData: () => {},
  setContracts: () => {},
  updateInvoiceForContract: () => {},
});

// Função para obter dados do localStorage
const getDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

const defaultInvoice = {
  id: null,
  invoiceNumber: null,
  issueDate: "2024-10-09",
  dueDate: "2024-18-09",
  amount: null,
  issqn: null,
  irrf: null,
  csll: null,
  cofins: null,
  inss: null,
  pis: null,
  retentionAmount: 0,
  percentage: 0,
  pdfUrl: "",
  authorId: null,
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getDataFromLocalStorage('user') || null);
  const [contracts, setContracts] = useState(getDataFromLocalStorage('contracts') || []);

   const updateAllInvoices = (updatedContracts) => {
    const newContracts = updatedContracts.map((contract) => {
      return {
        ...contract,
        invoice: contract.invoice || { ...defaultInvoice },
      };
    });
    setContracts(newContracts);
  };

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

  return (
    <AppContext.Provider value={{ user, contracts, setUserData: setUser, setContracts, updateAllInvoices }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

