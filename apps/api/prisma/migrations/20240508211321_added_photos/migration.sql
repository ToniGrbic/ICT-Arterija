/*
  Warnings:

  - Added the required column `address` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "address" VARCHAR(255) NOT NULL,
ADD COLUMN     "image" VARCHAR(255);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "imageData" BYTEA NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);
