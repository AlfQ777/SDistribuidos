//require('dotenv').config();
const express = require('express')

const app = express()
const port=8080;

app.use(express.static('public'));

app.get('/', function (req, res){
    res.send('HOLA MUNDOxx!!')
})

app.get('*', function (req, res){
    res.send('404 | pagina no encontrada, gil!!')
})

app.listen(port)