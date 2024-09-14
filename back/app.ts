import express from 'express';
import router from './src/routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

export default app;

