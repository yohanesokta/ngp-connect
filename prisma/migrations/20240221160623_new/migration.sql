/*
  Warnings:

  - Added the required column `kode` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "kode" TEXT NOT NULL;
