-- AlterTable
ALTER TABLE "users" ADD COLUMN     "photosId" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_photosId_fkey" FOREIGN KEY ("photosId") REFERENCES "Photos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
