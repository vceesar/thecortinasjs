const express = require("express");
const pool = require("../models/MySQLConnection");
var fs = require('fs');


var sql = "SELECT * from filme";  
pool.getConnection(function(err,conn){
    if(err){
       res.send("Ocorreu um erro");
    }
    else {
       conn.query(sql, function(err, result) {
          if(result){
            fs.writeFile('./ItensJson/filme.json', JSON.stringify(result), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
          }
       });
    }
 })