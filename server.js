const express = require('express');
const fs = require("fs");
const path = require('path');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

//Conexao com o Servidor Bluemix
let mysqlConnection  = mysql.createPool({
  connectionLimit : 5,
  host            : 'us-cdbr-sl-dfw-01.cleardb.net',
  user            : 'bae1c7d427ea20',
  password        : 'ea83cc61',
  database        : 'ibmx_334b1e8f91973ff'
});

//Seta a pasta estatica do aplicativo para o express
app.use(express.static(__dirname + '/app'));

//Habilito o cors
app.use(cors());

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

//Forca ao uso de SSL pelo express
// app.use(forceSSL());

app.get("/api/consultarTodosGados", function(req,res){

  mysqlConnection.query('SELECT * FROM gados LIMIT 3;', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });

});

//redireciona todas as rotas para a index
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});


//seta a porta para o express
app.listen(process.env.PORT || 5000);
console.log("Servidor Iniciado...");
