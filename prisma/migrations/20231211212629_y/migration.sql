/*
  Warnings:

  - The primary key for the `UserOptions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserOptions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserOptions_userId_key";

-- AlterTable
ALTER TABLE "UserOptions" DROP CONSTRAINT "UserOptions_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserOptions_pkey" PRIMARY KEY ("userId");
