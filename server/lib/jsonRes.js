exports.success = function (val, res) {
    var data = {
        code: 200,
        status: 'success',
        error: null,
        response: val
    }
    
    res.json(data);
    res.end();
}

exports.error = function (err, res) {
    var data = {
        status: 'Error',
        error: err.message,
        response: {}
    }

    res.json(data);
    res.end();
}