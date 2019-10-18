const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
// iniciando o app
const app = express();
app.use(express.json());
app.use(cors()); //acesso externo Ex: cors(dominio)permite acesso.
// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir("./src/models");
// Rotas
app.use('/api', require('./src/routes'));
// porta de requisição via localhost:3001
app.listen(3001);