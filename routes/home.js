const express = require("express");
const router = express.Router();
const pool = require("../models/MySQLConnection");

var sql="";

router.get("/home", (req,res) => {

    pool.getConnection(function(err,conn){
        if(err){
           res.send("Ocorreu um erro");
        }else{
           conn.query(sql, function(err, results){ 
              res.render('home.ejs', {data:results});    
           });  
        }
     })


});




module.exports = router;