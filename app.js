const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema.js');

const app = express();

app.use(cors());

mongoose.connect(
  'mongodb://sankhadeeproy007:onetouchacces*2@ds143242.mlab.com:43242/gql-db'
);

mongoose.connection.once('open', () =>
  console.log('connected to mongoose database')
);

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => console.log('listening'));
