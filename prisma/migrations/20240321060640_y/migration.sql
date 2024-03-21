/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uuid` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Chat_from_key";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Chat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Class" ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("sub");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_id_key" ON "Chat"("id");
