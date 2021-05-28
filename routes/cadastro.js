const express = require("express");
const router = express.Router();
const pool = require("../models/MySQLConnection");


var message = '';
    /* POST REQ */
  router.post("/cadastro", (req,res) => {
    var post  = req.body;
    var username = post.username;
    var password = post.password;
    var nome_completo= post.nome_completo;
    var data_nascimento = post.data_nascimento;
    var cidade = post.cidade;
    var estado  = post.estado;
    
    
    if(username !='' && password!='') {
       /*  var sql =  "INSERT INTO `user`(`userCompleteName`,`userBirthDay`,`userCidade`, `userEstado`) VALUES ('"+nome_completo+"','"+data_nascimento+"','"+cidade+"','"+estado+"')";
        var sql2 = "INSERT INTO `userlogin`(`username`,`userPassword`) VALUES ('"+username+"','"+password+"')"; */
        var sql = "INSERT INTO `usertest`(`userCompleteName`,`userBirthDay`,`userCidade`, `userEstado`,`username`,`userPassword`) VALUES ('" + nome_completo + "','" + data_nascimento + "','" + cidade + "','" + estado + "','" + username + "','" + password + "')";
     /*    console.log(sql, '/n', sql2);
        var query1 = db.query(sql, function(err, result) {
           console.log(result);
        });
        var query2 = db.query(sql2, function(err, result) {
         console.log(result);
         message = "Parabéns! Você criou sua conta.";
         res.render('cadastro.ejs',{message: message});

      }); */
     

   pool.getConnection(function(err,conn){
      if(err){
         res.send("Ocorreu um erro");
      }
      else {
         conn.query(sql, function(err, result) {
            if(result){
               message = "Parabéns! Você criou sua conta.";
               res.render('cadastro.ejs',{message: message});
            }
         });
      }
   })

} else {
   message = "Username e/ou Senha estão vazios.";
   res.render('cadastro.ejs',{message: message});
}

});



    /* GET REQ */
    router.get("/cadastro",(req,res) =>  {
        res.render('cadastro', {message: message} );
    });




module.exports = router;