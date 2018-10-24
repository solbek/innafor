const pgp = require('pg-promise')();
//db connect string
const db = pgp(process.env.DATABASE_URL);

//prepared sql statements we are going to use
const PrpSt = require('pg-promise').PreparedStatement;
const ps = {}; //object that contains the statements




//export module
module.exports.db = db; //db connection
module.exports.ps = ps; //prepared sql statements