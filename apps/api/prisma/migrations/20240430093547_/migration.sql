-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "author" VARCHAR(255),
    "created_at" DATE NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_center" (
    "id" SERIAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),

    CONSTRAINT "donation_center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_events" (
    "id" SERIAL NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "organizer" VARCHAR(255) NOT NULL,

    CONSTRAINT "donation_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_schedule" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "center_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "is_finished" BOOLEAN NOT NULL DEFAULT false,
    "is_valid" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATE NOT NULL,

    CONSTRAINT "donation_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "sponsor_id" INTEGER NOT NULL,
    "required_points" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "description" TEXT,

    CONSTRAINT "sponsors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "center_id" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "blood_type" VARCHAR(255),
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_rewards" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "reward_id" INTEGER NOT NULL,
    "created_at" DATE NOT NULL,

    CONSTRAINT "user_rewards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "staff_email_unique" ON "staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_unique" ON "user"("email");

-- AddForeignKey
ALTER TABLE "donation_center" ADD CONSTRAINT "donation_center_city_id_foreign" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "donation_events" ADD CONSTRAINT "donation_events_city_id_foreign" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "donation_schedule" ADD CONSTRAINT "donation_schedule_center_id_foreign" FOREIGN KEY ("center_id") REFERENCES "donation_center"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "donation_schedule" ADD CONSTRAINT "donation_schedule_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_event_id_foreign" FOREIGN KEY ("event_id") REFERENCES "donation_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rewards" ADD CONSTRAINT "rewards_sponsor_id_foreign" FOREIGN KEY ("sponsor_id") REFERENCES "sponsors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_center_id_foreign" FOREIGN KEY ("center_id") REFERENCES "donation_center"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_rewards" ADD CONSTRAINT "user_rewards_reward_id_foreign" FOREIGN KEY ("reward_id") REFERENCES "rewards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_rewards" ADD CONSTRAINT "user_rewards_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
