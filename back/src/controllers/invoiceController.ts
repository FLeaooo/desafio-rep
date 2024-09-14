import { Request, Response } from 'express';
import prisma from '@/prisma/client';

export const getAllInvoices = async (req: Request, res: Response): Promise<void> => {
  try {
    const invoices = await prisma.invoice.findMany();
    res.status(200).json(invoices)
  } catch(error) {
    res.status(400).json({error: 'error find invoices'})
  }
}

export const getInvoiceById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id: parseInt(id) },
    }
  )
    res.status(200).json(invoice)
  } catch(error) {
    res.status(400).json({error: 'error find invoice'})
  }
}

export const createInvoice = async (req: Request, res: Response): Promise<void> => {
  const { invoiceNumber, issueDate, dueDate, amount, issqn, irrf, csll, cofins, inss, pis, retentionAmount, percentage, pdfUrl, contractId } = req.body;
  
  try {
    const contract = await prisma.contract.findUnique({
      where: { id: contractId },
    })

    if (!contract) {
      res.status(404).json({error: 'Contract not found'})
      return;
    }

    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        issueDate,
        dueDate,
        amount,
        issqn,
        irrf,
        csll,
        cofins,
        inss,
        pis,
        retentionAmount,
        percentage,
        pdfUrl,
        authorId: contractId,
      },
    });
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating invoice', details: error});
  }
}
