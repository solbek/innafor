const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const db = require('./dbconnect').db; //database
const bcrypt = require('bcryptjs');
const prpSql = require('./dbconnect').prpSql;

const jwt = require("jsonwebtoken");
const authorize = require("./auth.js");

const secret = process.env.SECRET;

/*

router.use(function (req, res, next) {

    let token = req.body.token;
    if (!token) {
        res.status(403).json({
            msg: "No token received"
        }); //send
        console.log("no token recived");
        return; //quit
    } else {
        try {
            jwt.verify(token, secret);
        } catch (err) {
            res.status(403).json({
                msg: "The token is not valid!"
            });
            console.log("the token is not valid!");
            return;
        }
    }

    next();
});*/

router.post("/checkTimeStamp/",authorize, async function (req, res) {

    let timestamp = req.body.timestamp;    

    try {
        let check = await checkTimestamp(req.token.userID, timestamp);

        if (check) {
            res.status(400).json({
                feedback: "Du har allerede deltatt denne uken",
            }).end();
        } else {
            res.status(200).json({
                feedback: "Du kan delta i undersøkelsen",
            }).end();

        }
    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }
});

router.post("/answersIn/",authorize, async function (req, res) {
    
    let survayAnswers = req.body.survayAnswers;
    let timestamp = req.body.timestamp;

    let sendAnswers = prpSql.sendAnswers;
    sendAnswers.values = [survayAnswers, timestamp, req.token.gruppe];

    let participate = prpSql.participate;
    participate.values = [req.token.userID, timestamp];

    try {
        let check = await checkTimestamp(req.token.userID, timestamp);

        if (check) {
            res.status(400).json({
                feedback: "Du har allerede deltatt denne uken",
            }).end();
        } else {

            let answerIn = await db.any(sendAnswers);
            let writeParticipate = await db.any(participate);

            res.status(200).json({
                feedback: "Skjema er sendt",
            }).end();

        }
    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }
});


async function checkTimestamp(userID, timestamp) {

    let checkParticipant = prpSql.checkParticipant;
    checkParticipant.values = [userID];

    try {
        let check = await db.any(checkParticipant);

        let checkTimestamps = check.find(checkTimestamps => {
            return timestamp === checkTimestamps.timestamp;
        });

        if (checkTimestamps) {
            return true;
        } else {
            return false;
        }

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }
}

// henter resultater
router.get("/resultOut/",authorize,  async function(req,res){    
    console.log("her er token", req.token);

    let query = `SELECT "results" FROM "public"."survayresults" WHERE gruppe = '${req.token.gruppe}'`;
    
    try {
        if(req.token.role == "trener"){
            let result = await db.any(query);
            res.status(200).json(result); 
            console.log(result);    
        }
        else{
            res.status(401).json();
        }
    
    }catch (err) {
        res.status(500).json({error : err});
    }   
});

//export module -------------------------------------
module.exports = router;
