const express = require("express");
const router = express.Router();
const pool = require("../models/MySQLConnection");


   var message = '';



    /* POST REQ */
  router.post("/login", (req,res) => {
    var post  = req.body;
       var username = post.username;
       var password= post.password;
      
       var sql="SELECT `userId`, `userCompleteName` FROM `usertest` WHERE `username`='"+username+"' and userPassword = '"+password+"'";    
       
      pool.getConnection(function(err,conn){
         if(err){
            res.send("Ocorreu um erro");
         }else{
            conn.query(sql, function(err, results){       
               if(results.length){
                  res.redirect('/home');            
               }
               else{
                  message = 'Você inseriu um username ou password incorretos.';
                  res.render('index.ejs',{message: message});
               }             
            });
         }
      }) 

    });

    /* GET REQ */
    router.get("/login",(req,res) =>  {
      
        res.render('index.ejs', {message: message});
    });







module.exports = router;