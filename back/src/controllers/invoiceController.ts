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
  try {
    const contract = await prisma.contract.findUnique({
      where: { id: parseInt(req.body.contractId) },
    })

    if (!contract) {
      res.status(404).json({error: 'Contract not found'})
      return;
    }

    const issueDate = new Date(req.body.issueDate).toISOString();
    const dueDate = new Date(req.body.dueDate).toISOString();

    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNumber: req.body.invoiceNumber,
        issueDate: issueDate,
        dueDate: dueDate,
        amount: req.body.amount,
        issqn: req.body.issqn,
        irrf: req.body.irrf,
        csll: req.body.csll,
        cofins: req.body.cofins,
        inss: req.body.inss,
        pis: req.body.pis,
        retentionAmount: req.body.retentionAmount,
        percentage: req.body.percentage,
        pdfUrl: req.body.pdfUrl,
        authorId: contract.id,
      },
    });
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating invoice', details: error});
  }
}
