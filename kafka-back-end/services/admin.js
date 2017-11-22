
var mysql = require('../models/mysql');


function fetchUrl(msg, callback){

    var res={};
    var getURL="select * from vendors";

    mysql.fetchData(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            if(results.length > 0){

                res.code = "200";

                res.value = results;
                //res.value = "asdf";
                callback(null, res);
            }
            else {
                res.code = "401";

                callback(null, res);
            }
        }
    },getURL);
}


exports.fetchUrl = fetchUrl;