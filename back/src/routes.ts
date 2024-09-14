import { Router } from 'express';
import { getAllUsers, createUser, getUserByCnpj } from './controllers/userController';

const router = Router();

router.get('/users', getAllUsers);

router.get('/user/:cnpj', getUserByCnpj);

router.post('/users', createUser);

export default router;

