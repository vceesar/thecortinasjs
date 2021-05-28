var mysql = require('mysql');
var dados_conexaobanco = {
    connectionLimit: 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b2493a0e6ab4c6',
    password: 'bd5a9da2',
    database: 'heroku_f818dae8c4e1452',
    multipleStatements: true
};

var pool = mysql.createPool(dados_conexaobanco);




module.exports = pool;
 