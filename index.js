const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pessoa = require("./model/Pessoa");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.get("/cadastro", function (req, res) {
  res.sendFile(__dirname + "/src/cadVisitante.html");
});

app.post("/addCadastro", function (req, res) {
  pessoa
    .create({
      nome: req.body.nome,
      idade: req.body.idade,
      telefone: req.body.telefone,
      email: req.body.email,
    })
    .then(function () {
      res.redirect("/cadastro");
    })
    .catch(function (erro) {
      res.send("ERRO: Cadastro não realizado!" + erro);
    });
});

app.listen(3000);
