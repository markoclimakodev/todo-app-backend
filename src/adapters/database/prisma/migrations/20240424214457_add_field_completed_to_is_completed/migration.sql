/*
  Warnings:

  - You are about to drop the column `completed` on the `todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todos" DROP COLUMN "completed",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false;
