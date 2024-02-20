-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "nama_kelas" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "members" JSONB NOT NULL DEFAULT '[]',
    "message" JSONB NOT NULL DEFAULT '[]',

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_uuid_key" ON "Class"("uuid");
