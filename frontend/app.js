var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var request = require("request");
var app = express();

const route = require('./api/routes/index.js')

mongoose.connect('mongodb://localhost:27017/vams');

mongoose.connection.on('connected', () => {
	console.log('connected to mongodb');
});
// app.get('/*', (req, res) => res.send('Index Page'));
mongoose.connection.on('error', (err) => {
	console.log(err);
});

// app.get('*', function(req, res) {
// 	res.sendfile('"./src/index.html"')
//   })
app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('Server started at port' + PORT);
});