/*
  Warnings:

  - The primary key for the `UserOptions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId]` on the table `UserOptions` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `UserOptions` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Comments_userId_key";

-- AlterTable
ALTER TABLE "UserOptions" DROP CONSTRAINT "UserOptions_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "UserOptions_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserOptions_userId_key" ON "UserOptions"("userId");
