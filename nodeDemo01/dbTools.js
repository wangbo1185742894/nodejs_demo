
const mysql = require("mysql2");

var mysql_config = {
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'wb283919.',
    database:'demo01_db'
};

var pool = mysql.createPool(mysql_config);

var executeSql = function (sql,values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err,connection) {
            if (err){
                console.log(err);
                reject("get db connection error");
                return;
            }

            connection.query(sql,values,function (err,result) {

                if (err){
                    reject(err);
                }else{
                    resolve(result);
                }

            });
        })
    });
}

exports.execute = executeSql;