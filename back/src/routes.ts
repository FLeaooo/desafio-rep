import { Router } from 'express';
import { getAllUsers, createUser, loginUser } from '@/controllers/userController';
import { getAllContracts, getContractById } from '@/controllers/contractController';
import { getAllInvoices, getInvoiceById, createInvoice } from '@/controllers/invoiceController';

const router = Router();

// Route users
router.get('/users', getAllUsers);

router.post('/user', loginUser);

router.post('/users', createUser);

// Routes contracts
router.get('/contracts', getAllContracts);

router.get('/contract/:id', getContractById);

// Routes invoices
router.get('/invoices', getAllInvoices);

router.get('/invoice/:id', getInvoiceById);

router.post('/invoices', createInvoice);

export default router;
