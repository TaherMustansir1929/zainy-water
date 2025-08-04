-- CreateTable
CREATE TABLE "public"."OtherExpense" (
    "id" TEXT NOT NULL,
    "moderator_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OtherExpense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."OtherExpense" ADD CONSTRAINT "OtherExpense_moderator_id_fkey" FOREIGN KEY ("moderator_id") REFERENCES "public"."Moderator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
