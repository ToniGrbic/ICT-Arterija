/*
  Warnings:

  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Photo";

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "imageData" BYTEA NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);
