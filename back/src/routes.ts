import { Router } from 'express';
import { getAllUsers, createUser, loginUser } from '@/controllers/userController';
import { getAllContracts, getContractById, getUserContracts } from '@/controllers/contractController';
import { createInvoiceWithPdfUpload } from '@/controllers/invoiceController';

const router = Router();

// Route users
router.get('/users', getAllUsers);

router.post('/user', loginUser);

router.post('/users', createUser);

// Routes contracts
router.get('/contracts', getAllContracts);

router.get('/contract/:id', getContractById);

// Routes invoices

router.post('/upload-invoice', createInvoiceWithPdfUpload);

router.get('/contracts/:cnpj', getUserContracts);


export default router;
