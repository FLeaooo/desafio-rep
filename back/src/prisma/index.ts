import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     cnpj: '12.345.678/0001-02',
  //     businessName: 'Usuario2',
  //     tradingName: 'Trader2'
  //   },
  // });



  // const user = await prisma.user.create({
  //   data: {
  //     cnpj: '21.12.2134',
  //     businessName: 'Nirvana',
  //     tradingName: 'NirvanaTrading',
  //     contracts: {
  //       create: {
  //         name: "Contrato4",
  //         contractCode: "ra0d9ax2",
  //         retention: 15,
  //       }
  //     }
  //   }
  // })
  // const users = await prisma.user.findMany({
  //   include: {
  //     contracts: true
  //   }
  // });

  // const invoice = await prisma.invoice.create({
  //   data: {
  //     invoiceNumber: 12345,
  //     issueDate: '2024-09-14T10:00:00.000Z',
  //     dueDate: '2024-10-14T10:00:00.000Z',
  //     amount: 1000.00,
  //     issqn: 50.00,
  //     irrf: 30.00,
  //     csll: 20.00,
  //     cofins: 15.00,
  //     inss: 25.00,
  //     pis: 10.00,
  //     retentionAmount: 150.00,
  //     percentage: 10.00,
  //     pdfUrl: "https://example.com/invoice/12345.pdf",
  //     authorId: 1,
  //   },
  // })

  // const user = await prisma.user.findUnique({
  //   where: { cnpj: "12.345.678/0001-00" },
  //   include: {
  //     contracts: {
  //       include: {
  //         invoice: true
  //       }
  //     }
  //   }
  // })

  const contract = await prisma.contract.create({
    data: {
      name: "Contrato34",
      contractCode: "B4",
      retention: 10,
      author: {
        connect: {
          id: 7,
        }
      }
    }
  })

  // const contracts = await prisma.contract.findMany();
  // console.log('Show contracst:', contracts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
