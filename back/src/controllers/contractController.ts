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
