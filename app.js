const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const bodyParser=require("body-parser");


/* Rotas */
const routes = require("./routes");
const cadastroRoute = require("./routes/cadastro");
const loginRoute = require("./routes/login");
const indexRoute = require("./routes/index");
const homeRoute = require("./routes/home");
const cadastraritemRoute = require("./routes/cadastraritem");
/* -------- */

let port = process.env.PORT || 8080;
app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

 
app.use(loginRoute);
app.use(indexRoute);
app.use(cadastroRoute);
app.use(homeRoute);
app.use(cadastraritemRoute);


app.listen(port, () => {
  console.log(`App rodando via node em ${port}`);
});
