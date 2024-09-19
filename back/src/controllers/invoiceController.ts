import { Request, Response } from 'express';
import prisma from '@/prisma/client';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

export const createInvoice = async (req: Request, res: Response): Promise<void> => {
  try {
    const contract = await prisma.contract.findUnique({
      where: { id: parseInt(req.body.contractId) },
    });

    if (!contract) {
      res.status(404).json({ error: 'Contract not found' });
      return;
    }

    const pdfPath = req.file?.path;

    if (!pdfPath) {
      res.status(400).json({ error: 'PDF file is required' });
      return;
    }

    const issueDate = new Date(req.body.issueDate).toISOString();
    const dueDate = new Date(req.body.dueDate).toISOString();

    const invoiceNumber = parseInt(req.body.invoiceNumber, 10);

    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNumber: invoiceNumber,
        issueDate: issueDate,
        dueDate: dueDate,
        amount: parseFloat(req.body.amount),
        issqn: req.body.issqn ? parseFloat(req.body.issqn) : undefined,
        irrf: req.body.irrf ? parseFloat(req.body.irrf) : undefined,
        csll: req.body.csll ? parseFloat(req.body.csll) : undefined,
        cofins: req.body.cofins ? parseFloat(req.body.cofins) : undefined,
        inss: req.body.inss ? parseFloat(req.body.inss) : undefined,
        pis: req.body.pis ? parseFloat(req.body.pis) : undefined,
        retentionAmount: parseFloat(req.body.retentionAmount),
        percentage: parseFloat(req.body.percentage),
        pdfUrl: pdfPath,
        authorId: contract.id,
      },
    });

    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating invoice', details: error });
  }
};

export const createInvoiceWithPdfUpload = [
  upload.single('pdf'),
  createInvoice
];
