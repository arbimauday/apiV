'use strict';

const conn = require('../../../config/db');
const response = require('../../lib/jsonRes')
const uuid = require('../../lib/uuid')

const db = 'vehicles'


module.exports = function (app) {

    const findUUID = function (req, res) {
        var query = 'Select * from ' + db + ' where uuid=' + '\''+req.params.uuid+'\''
        conn.query(query, function (error, result) {
            if(error){
                return response.error(error, res)
            }
            return response.success(result, res)
        })
    }


    app.get('/api/v1/vehicle', function (req, res) {

        var query = 'Select * from ' + db
        conn.query(query, function (error, result) {
            if(error){
                return response.error(error, res)
            }
            return response.success(result, res)
        })
    });

    app.route('/api/v1/vehicle/:uuid')
        .get(findUUID);



    /*Add
    data: {
        uuid, typeId, name, productionBy, numberMachine, branchType, fuel, color, purchaseDate, plateNumber, statusId
    }
    * */
    app.post('/api/v1/vehicle', function (req, res) {

        var data = Object.assign(
            {uuid: uuid()},
            req.body
        )

        var query = 'Insert into ' + db + ' Set ?'

        conn.query(query, data,  function (error, result) {
            if(error){
                return response.error(error, res)
            }
            return response.success(result, res)
        });
    });

    app.put('/api/v1/vehicle/:uuid', function (req, res) {

        var data = req.body

        var query = 'Update ' + db + ' Set ? Where uuid=' + '\''+req.params.uuid+'\''
        conn.query(query, data, function (error, result) {
            if(error){
                return response.error(error, res)
            }
            return response.success(result, res)
        })
    });

};