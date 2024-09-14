import { Router } from 'express';
import { getAllUsers, createUser, getUserByCnpj } from '@/controllers/userController';
import { getAllContracts, getContractById } from '@/controllers/contractController';
import { getAllInvoices, getInvoiceById, createInvoice } from '@/controllers/invoiceController';

const router = Router();

// Route users
router.get('/users', getAllUsers);

router.get('/user/:cnpj', getUserByCnpj);

router.post('/users', createUser);

// Routes contracts
router.get('/contracts', getAllContracts);

router.get('/contract/:id', getContractById);

// Routes invoices
router.get('/invoices', getAllInvoices);

router.get('/invoice/:id', getInvoiceById);

router.post('/invoices', createInvoice);

export default router;
