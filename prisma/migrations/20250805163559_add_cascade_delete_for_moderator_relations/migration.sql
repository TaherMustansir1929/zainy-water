-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_moderator_id_fkey";

-- DropForeignKey
ALTER TABLE "OtherExpense" DROP CONSTRAINT "OtherExpense_moderator_id_fkey";

-- AlterTable
ALTER TABLE "Moderator" ADD COLUMN     "isWorking" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_moderator_id_fkey" FOREIGN KEY ("moderator_id") REFERENCES "Moderator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OtherExpense" ADD CONSTRAINT "OtherExpense_moderator_id_fkey" FOREIGN KEY ("moderator_id") REFERENCES "Moderator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
