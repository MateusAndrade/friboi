const express = require('express');
const fs = require("fs");
const path = require('path');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

  mysqlConnection.query('SELECT * FROM gados;', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });

});

app.get("/api/consultarGadoDestaque", function(req,res){

  mysqlConnection.query('SELECT * FROM gados LIMIT 4;', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });

});

app.post('/api/cadastrarGado', function (req, res) {

  let query = `INSERT INTO gados(descricao,informacoes, peso, sexo, avaliacao, preco  ,idade, foto, data)
               VALUES ('${req.body.descricao}',
                       '${req.body.informacoes}',
                       '${req.body.peso}',
                       '${req.body.sexo}',
                       0,
                       '${req.body.preco}',
                       '${req.body.idade}',
                       '${req.body.urlFoto}',
                       CURDATE())`;

  mysqlConnection.query(query, function (error, results, fields) {
    if (error){
      res.status(500).send(JSON.stringify({mensagem: error}));
    } else {
      res.status(200).send(JSON.stringify({mensagem:'Cadastrado com sucesso'}));
    }
  });


});

//redireciona todas as rotas para a index
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});


//seta a porta para o express
app.listen(process.env.PORT || 5000);
console.log("Servidor Iniciado...");
