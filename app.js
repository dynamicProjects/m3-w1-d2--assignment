const express= require('express');
const path = require('path');
const route = require('./routes/index');
const bodyparser = require('body-parser')

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(bodyparser.urlencoded({extended: true}))
app.use('/', route);
app.use(express.static('public'));

module.exports =app;    