const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const db = require('./dbconnect').db;
const prpSql = require('./dbconnect').prpSql;

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const authorize = require("./auth.js");

const secret = process.env.SECRET;






router.post("/login/", async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
   
    try {
        let hash = "";
        let usrCheck = await findUser(username);
        
        if (usrCheck){
            hash = usrCheck.hash;
        }
        
        let passwordCheck = await bcrypt.compare(password, hash);
    
        if (findUser && passwordCheck) {

            let payload = {
                userID: usrCheck.userid,
                role: usrCheck.role,
                gruppe: usrCheck.gruppe
            };
            let tok = jwt.sign(payload, secret, {
                expiresIn: "12h"
            });
            res.status(200).json({
                token: tok
            }).end();

        } else {
            res.status(400).json({
                feedback: "Feil brukernavn eller passord"
            }).end();

        }



    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!
    }


});


router.post("/register/", async function (req, res) {
    let brukernavn = req.body.brukernavn;
    let gruppe = req.body.gruppe;
    let passord = req.body.passord;
    let hash = bcrypt.hashSync(passord, 10);


    let regUserQuery = prpSql.regUser;
    regUserQuery.values = [brukernavn, hash, gruppe];

    try {

        let check = await findUser(brukernavn);

        if (check) {
            res.status(400).json({
                feedback: "Brukernavn er opptatt",
            }).end();

        } else {
            let regUser = await db.any(regUserQuery);
            let payload = {
                userID: regUser[0].userid,
                role: regUser[0].role,
                gruppe: regUser[0].gruppe,
            };
            console.log(payload);
            let tok = jwt.sign(payload, secret, {
                expiresIn: "12h"
            });
            res.status(200).json({
                feedback: "Bruker registrert",
                token: tok,
            }).end();
        }

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }

});



router.get("/verifyToken/",authorize, async function (req, res) {

        try {  
        res.status(200).json({
            role: req.token.role,
        });
            
        } catch (err) {
            res.status(403).json({
                msg: "The token is not valid!"
            });
            console.log("the token is not valid!");
            return;
        }

});


async function findUser(brukernavn) {

    let findUser = prpSql.findUser;
    findUser.values = [brukernavn];

    try {
        let findUsername = await db.any(findUser);
        if (findUsername.length !== 0) {
            return findUsername[0];
        }

        return false;

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }

}





//export module -------------------------------------
module.exports = router;