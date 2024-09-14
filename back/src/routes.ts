import { Router } from 'express';
import { getAllUsers, createUser, getUserByCnpj } from './controllers/userController';

const router = Router();

router.get('/users/', getAllUsers);

router.get('/users/:id', getUserByCnpj);

router.post('/users', createUser);

export default router;

