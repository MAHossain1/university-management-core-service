-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "credits" DROP NOT NULL,
ALTER COLUMN "credits" DROP DEFAULT,
ALTER COLUMN "credits" SET DATA TYPE TEXT;
