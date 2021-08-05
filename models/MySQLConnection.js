var mysql = require('mysql');
var dados_conexaobanco = {
    connectionLimit: 10,
    host: 'yourdatabaseinfo',
    user: 'yourdatabaseinfo',
    password: 'yourdatabaseinfo',
    database: 'yourdatabaseinfo',
    multipleStatements: true
};


var pool = mysql.createPool(dados_conexaobanco);




module.exports = pool;
 