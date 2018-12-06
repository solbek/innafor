const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = (process.env.PORT || 3000);


const users = require('./js/users.js');
const survay = require('./js/survay.js');
const editUsers = require('./js/editUsers.js');


app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    //res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next(); //go to the specified route
});


app.use('/innafor/users/', users);
app.use('/innafor/survay/', survay);
app.use('/innafor/editUsers/', editUsers);




app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
});
