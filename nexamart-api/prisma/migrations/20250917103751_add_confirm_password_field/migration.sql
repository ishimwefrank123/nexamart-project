/*
  Warnings:

  - Added the required column `confirmPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "confirmPassword" TEXT NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
