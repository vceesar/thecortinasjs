const express = require("express");
const router = express.Router();
const pool = require("../models/MySQLConnection");

var message = '';
router.get("/", (req,res) => {
  
  res.render('index',{message: message});
});

module.exports = router;
