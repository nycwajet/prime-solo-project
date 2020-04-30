
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80)  NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "employee_id" INT (9) NOT NULL, 
    "email" VARCHAR (80) NOT NULL,
    "address" VARCHAR (100) NOT NULL,
    "address_line2" VARCHAR (50),
    "city" VARCHAR (80) NOT NULL,
    "state" VARCHAR (2) NOT NULL,
    "zip_code" int (5) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);

CREATE TABLE "documents" (
   "id" SERIAL PRIMARY KEY,
   "document-type" INT FOREIGN KEY REFERENCES "document-type"."id",
   "description" CHAR,
   "date-accomplished" DATE NOT NULL, 
   "date-expiration" DATE,
   "user-id" INT REFERENCES "user"."id",
);

CREATE TABLE "document-type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) NOT NULL
)