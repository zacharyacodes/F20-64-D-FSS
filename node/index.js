var express = require('express');
var mongoose = require('mongoose');

var bodyparser = require('body-parser');
var cors = require('cors');
const route = require('./routes/route.js');



var app = express();

mongoose.connect('mongodb://localhost:27017/vams');

mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const PORT = 3000;

app.use(cors());



app.use(bodyparser.json());








app.use('/api', route);

app.listen(PORT, () => {
    console.log('server started at port' + PORT);
});

