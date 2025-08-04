/*
  Warnings:

  - Added the required column `empty_bottles` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filled_bottles` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Delivery" ADD COLUMN     "empty_bottles" INTEGER NOT NULL,
ADD COLUMN     "filled_bottles" INTEGER NOT NULL;
