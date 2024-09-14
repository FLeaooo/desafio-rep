import { Router } from 'express';
import { getAllUsers, createUser, getUserByCnpj } from '@/controllers/userController';
import { getAllContracts, getContractById } from '@/controllers/contractController';

const router = Router();

// Route users
router.get('/users', getAllUsers);

router.get('/user/:cnpj', getUserByCnpj);

router.post('/users', createUser);

// Routes contracts
router.get('/contracts', getAllContracts);

router.get('/contract/:id', getContractById);

export default router;