CREATE TABLE "scores" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"score"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE INDEX idx_score ON scores(score DESC);
