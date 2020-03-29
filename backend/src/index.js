  const express = require('express');
  const cors = require('cors');
  const routes = require('./routes');

  const app = express();

  app.use(cors());
  app.use(express.json());

  /* METODOS HTTP:
  GET: Buscar/listar uma informação basck-end
  POST: Criar uma informação no back-end
  PUT: Alterar informação mo back-end
  DELETE: Deletar informação no back-end
  */

  /* Tipos de parâmetros:
  Query Params: Parâmetros nomeados enviados na rota, após "?" (filtros, paginação)
  Route Params: Parâmetros utilizados para identificar resursos (depois do recurso eu coloco /id e na requisição feita pelo postman eu indico qual o id do usuário)
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /*
  SQL: MySQL, SQlite, PostgresSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB etc
  */

  /* Para fazer a comunicação com o BD:
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where()
  */

  app.use(routes);

  app.listen(3333);