-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "tradingName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contractCode" TEXT NOT NULL,
    "retention" DECIMAL(65,30) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "invoiceNumber" INTEGER NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "issqn" DECIMAL(65,30),
    "irrf" DECIMAL(65,30),
    "csll" DECIMAL(65,30),
    "cofins" DECIMAL(65,30),
    "inss" DECIMAL(65,30),
    "pis" DECIMAL(65,30),
    "retentionAmount" DECIMAL(65,30) NOT NULL,
    "percentage" DECIMAL(65,30) NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_contractCode_key" ON "Contract"("contractCode");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_authorId_key" ON "Invoice"("authorId");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
