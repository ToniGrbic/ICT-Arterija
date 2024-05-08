-- AlterTable
ALTER TABLE "participants" ADD COLUMN     "is_finished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_valid" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_working" BOOLEAN NOT NULL DEFAULT false;
