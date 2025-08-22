-- CreateEnum
CREATE TYPE "public"."MonitorType" AS ENUM ('HTTP', 'PING');

-- CreateEnum
CREATE TYPE "public"."MonitorStatus" AS ENUM ('UP', 'DOWN', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "public"."LogStatus" AS ENUM ('UP', 'DOWN', 'ERROR');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Monitor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "type" "public"."MonitorType" NOT NULL,
    "status" "public"."MonitorStatus" NOT NULL DEFAULT 'UNKNOWN',
    "lastCheckedAt" TIMESTAMP(3),
    "lastResponseTime" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MonitorLog" (
    "id" TEXT NOT NULL,
    "monitorId" TEXT NOT NULL,
    "status" "public"."LogStatus" NOT NULL,
    "responseTime" INTEGER,
    "errorMessage" TEXT,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonitorLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Monitor" ADD CONSTRAINT "Monitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MonitorLog" ADD CONSTRAINT "MonitorLog_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "public"."Monitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
