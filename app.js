const express= require('express');
const route = require('./routes/index');

const app = express();
app.use('/', routes);

module.exports =app;    