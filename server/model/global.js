'use strict';

const conn = require('../../config/db');
// const bodyParser = require('body-parser');
// const express = require('express');

// const app = express();

/* Set express for active header CROS port */
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // '*' penggunaan url default, semua url dapat mengakses
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });
//
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
/* End */

/* Convert form */
function convertForm(value) {
    var fm = []

    if (value != null && value != '' && value.length > 0) {
        fm = Object.keys(value).forEach(function(key){
            return {
                key: value[key]
            }
        })
    }

    return fm
}


function jsonRes(mess, code, results, err) {
    return JSON.stringify({
        error: err,
        message: mess,
        code: code,
        results: results
    })
}

function jsonOf(val, res) {
    var data = {
        status: 200,
        results: val
    };
    res.json(data);
    res.end();
}
/* End */

exports.post = function(app, url, db, data, required, mesErr, number) {
    app.post(url, function (req, res) {
        var query = 'INSERT INTO ' + db +' SET ?'

        conn.query(query, data ,function(error, result){
            if(error) error;
            return res.send({error:false, data:result, message: 'Success Create'})
        })
    })
}

exports.get = function(app, url, db, allow, orderQuery) {
    app.get(url, function (req, res) {
        // var ofParams = null
        // if(allow) {
        //     ofParams = 'WHERE ' + ofParams
        // }

        var query = 'SELECT * FROM ' + db + ' ' + ofParams

        conn.query(query, function (error, result) {
            if(error){
                return res.send(error);
            }
            return res.send({ data:result, message: 'Success Get'});
        })
    })
}

exports.update = function(app, url, db, updateBy, orderQuery) {
    app.put(url, function (req, res) {
        var data = ''
        var query = 'UPDATE ' + db + ' SET ? WHERE ' + updateBy

        conn.query(query, data, function (error, result) {
            if(error) throw error;
            return res.send({ error:false, data:result, message: 'Success update!'});
        })
    })
}

exports.join = function(app, url, db1, db2) {

}
