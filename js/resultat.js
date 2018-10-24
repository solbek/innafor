const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./dbconnect').db; //database

/*
router.get("/getUsers/", async function (req, res){
    let query = 'SELECT * FROM public."Users"';
    
    
    try{
    let users = await db.any(query);
    console.log(users);
    res.status(200).json(users);
        
    }catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!
    }

    
});



*/

module.exports = router;