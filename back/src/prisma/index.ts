// import { PrismaClient } from '@prisma/client';
//
// const prisma = new PrismaClient();
//
// async function main() {
//   // const user = await prisma.user.create({
//   //   data: {
//   //     cnpj: '12.345.678/0001-02',
//   //     businessName: 'Usuario2',
//   //     tradingName: 'Trader2'
//   //   },
//   // });
//
//
//   // const contract = await prisma.contract.create({
//   //   data: {
//   //     name: "Contrato2",
//   //     contractCode: "Ca0d9ax2",
//   //     retention: 10,
//   //     author: {
//   //       connect: {
//   //         id: 1,
//   //       }
//   //     }
//   //   }
//   // })
//
//   // const user = await prisma.user.create({
//   //   data: {
//   //     cnpj: '21.12.2134',
//   //     businessName: 'Nirvana',
//   //     tradingName: 'NirvanaTrading',
//   //     contracts: {
//   //       create: {
//   //         name: "Contrato4",
//   //         contractCode: "ra0d9ax2",
//   //         retention: 15,
//   //       }
//   //     }
//   //   }
//   // })
//   const users = await prisma.user.findMany({
//     include: {
//       contracts: true
//     }
//   });
//   // const contracts = await prisma.contract.findMany();
//   console.log('Show users:', users);
//   // console.log('Show contracst:', contracts);
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   })
