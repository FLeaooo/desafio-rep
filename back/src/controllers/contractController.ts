import { Request, Response } from 'express';
import prisma from '@/prisma/client';

export const getAllContracts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contracts = await prisma.contract.findMany();
    res.status(200).json(contracts)
  } catch(error) {
    res.status(400).json({error: 'error find contracts'})
  }
}

export const getContractById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const contract = await prisma.contract.findUnique({
      where: { id: parseInt(id) },
      include: {
        invoice: true,
      }
    }
  )
    res.status(200).json(contract)
  } catch(error) {
    res.status(400).json({error: 'error find contract'})
  }
}

export const getUserContracts = async (req: Request, res: Response): Promise<void> => {
  const { cnpj } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { cnpj: cnpj}
    })

    if (!user) {
      res.status(404).json({error: 'User not found'})
      return;
    }

    const contracts = await prisma.contract.findMany({
      where: {
        authorId: user.id,
      },
      include: {
        invoice: true,
      },
    });
    
    res.status(200).json(contracts);
  } catch (error) {
    console.error('Error fetching user contracts:', error);
    res.status(400).json({ error: 'Erro ao buscar contratos do usuário' });
  }
};

