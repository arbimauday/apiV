'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const conn = require('../config/db');
const app = express();

/* Set express for active header CROS port */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // '*' penggunaan url default, semua url dapat mengakses
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* End */

app.get('/api/v1/test', function (req, res){
    var sql = "SELECT * FROM test";
    conn.query(sql, function(err, results, field) {
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end(JSON.stringify(results));
    });
});

var vehicles = require('./model/vehicles/index')
vehicles(app);


module.exports = app;