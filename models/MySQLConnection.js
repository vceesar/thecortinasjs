var mysql = require('mysql');
var dados_conexaobanco = {
    connectionLimit: 10,
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b8e66a9c407b22',
    password: '1840c6fb',
    database: 'heroku_923d2c6928001a1',
    multipleStatements: true
};


var pool = mysql.createPool(dados_conexaobanco);




module.exports = pool;
 