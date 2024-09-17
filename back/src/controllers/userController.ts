import { Request, Response } from 'express';
import prisma from '@/prisma/client';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error){
    res.status(400).json({error: 'error find users'})
  }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { cnpj } = req.body;

  console.log(cnpj);
  try {
    console.log(cnpj);
    const user = await prisma.user.findUnique({
      where: { cnpj: cnpj }
    });

    if (user) {
      res.status(200).json(user);
    } else {
      console.log(cnpj);
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.log(cnpj);
    res.status(400).json({ error: 'Error fetching user.' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { cnpj, businessName, tradingName } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        cnpj,
        businessName,
        tradingName
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user.' });
  }
};

