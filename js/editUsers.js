const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const db = require('./dbconnect').db; //database
const bcrypt = require('bcryptjs');
const prpSql = require('./dbconnect').prpSql;

const jwt = require("jsonwebtoken");
const authorize = require("./auth.js");

const secret = process.env.SECRET;






router.post("/updatePassword/",authorize, async function (req, res) {

    let userInfo = req.token;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let newHash = bcrypt.hashSync(newPassword, 10);
    
    let updatePassword = prpSql.updateHash;
    updatePassword.values = [newHash, userInfo.userID];

    
    try {
        
        
        let hash = await getHash(userInfo.userID);
        let passwordCheck = await bcrypt.compare(oldPassword, hash);
        
        if (passwordCheck){
        await db.none(updatePassword);
        console.log("passord endret");
        res.status(200).json("Passord er oppdatert")
            
            
        }else{
            res.status(400).json("Feil passord");
        }
        

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }
});


async function getHash(userid) {

    let getHash = prpSql.getHash;
    getHash.values = [userid];
   
    try {
        let dbHash = await db.any(getHash);
        
        return dbHash[0].hash;

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }

}


//export module -------------------------------------
module.exports = router;