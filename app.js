const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb')
const controllers = require('./controler/index')
const sanitize = require('./sanitization/index')
const service = require('./service/index')

const app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>
{
    console.log("server is running");
})
