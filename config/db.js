'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'appvehicle'
});

con.connect(function(err){
    if(!err)
        console.log('DB connection success!');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

module.exports = con;