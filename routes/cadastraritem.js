const express = require("express");
const router = express.Router();
const pool = require("../models/MySQLConnection");


var message = '';

router.get("/cadastraritem", (req,res) =>{
    res.render('cadastraritem', {message: message});
});

router.post("/cadastraritem", (req,res) => {
    var post  = req.body;

      /* Dados Livro */
      var titulolivro = post.titulolivro;
      var autorlivro = post.autorlivro;
      var editorialivro= post.editorialivro;
      var paislivro = post.paislivro;
      var ano_lançamentolivro = post.ano_lançamentolivro;
      
      var sql_livro= "INSERT INTO `livro`(`tituloLivro`,`autorLivro`,`editora`, `paisLivro`,`anoLancamento`) VALUES ('" + titulolivro + "','" + autorlivro + "','" + editorialivro + "','" + paislivro + "','" + ano_lançamentolivro + "')";
      /* Dados Serie */
      var tituloserie = post.tituloSerie;
      var diretorserie = post.diretorSerie;
      var elencoPrincipalSerie = post.elencoPrincipalSerie;
      var paisSerie= post.paisSerie;
      var anoSerie = post.anoSerie;
      var numTempSerie = post.numTempSerie;
      

      var sql_serie= "INSERT INTO `serie`(`tituloSerie`,`diretorSerie`,`elencoPrincipalSerie`, `paisSerie`,`anoSerie`,`numTemp`) VALUES ('" + tituloserie + "','" + diretorserie + "','" + elencoPrincipalSerie + "','" + paisSerie + "','" + anoSerie + "','" + numTempSerie + "')";
      /* Dados filme */

      var titulofilme = post.titulofilme;
      var diretorfilme = post.diretorfilme;
      var elencoPrincipalFilme = post.elencoPrincipalFilme;
      var paisfilme = post.paisfilme;
      var anofilme = post.anofilme;

      
      var sql_filme= "INSERT INTO `filme`(`tituloFilme`,`diretorFilme`,`elencoPrincipalFilme`, `paisFilme`,`anoFilme`) VALUES ('" + titulofilme + "','" + diretorfilme + "','" + elencoPrincipalFilme + "','" + paisfilme + "','" + anofilme + "')";
      
         if(titulolivro) {
            pool.getConnection(function(err,conn){
               if(err){
                  res.send("Ocorreu um erro");
               }else{
                  conn.query(sql_livro, function(err, result) {
                     message = "Parabéns! Você adicionou um livro.";
                     res.render('cadastraritem.ejs',{message: message});
                  }); 
               }
            })
         }

         else if(titulofilme) {
            pool.getConnection(function(err,conn){
               if(err){
                  res.send("Ocorreu um erro");
               }else{
                  conn.query(sql_filme, function(err, result) {
                     message = "Parabéns! Você adicionou um filme.";
                     res.render('cadastraritem.ejs',{message: message});
                  });  
               }
            })     
         } 

         else if(tituloserie) {
            pool.getConnection(function(err,conn){
               if(err){
                  res.send("Ocorreu um erro");
               }else{
                  conn.query(sql_serie, function(err, result) {
                     message = "Parabéns! Você adicionou uma Série.";
                     res.render('cadastraritem.ejs',{message: message});
                  }); 
               }
            })
            
         } else {
            message = "Tente novamente, tem algo errado.";
            res.render('cadastraritem.ejs',{message: message});
         }


});








module.exports = router;