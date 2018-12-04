const pgp = require('pg-promise')();
//db connect string
const db = pgp(process.env.DATABASE_URL);

const PrpSt = require('pg-promise').PreparedStatement;
const prpSql = {};

//User-----------------
prpSql.regUser = new PrpSt('regUser',`INSERT INTO "public"."brukere" ("userid", "brukernavn", "hash", "gruppe", "role") VALUES (DEFAULT, $1, $2, $3, DEFAULT) RETURNING "userid", "gruppe", "role"`);

prpSql.findUser = new PrpSt('findUser', `SELECT * FROM "public"."brukere" WHERE brukernavn = $1`);

//Survay---------------
prpSql.sendAnswers = new PrpSt('sendAnswers', `INSERT INTO "public"."survayresults" ("id", "results", "timestamp", "gruppe") VALUES (DEFAULT, $1, $2, $3)`);

prpSql.participate  = new PrpSt('participate', `INSERT INTO "public"."participants" ("id", "userid", "timestamp") VALUES (DEFAULT, $1, $2)`);

prpSql.checkParticipant = new PrpSt('checkParticipant', `SELECT * FROM "public"."participants" WHERE userid = $1`);

//export module
module.exports.db = db; //db connection
module.exports.prpSql = prpSql; //prepared sql statements