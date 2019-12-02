/*
//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const mongo = require('mongodb');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/login.html'))
});
//let mongoose = require("mongoose");
//mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");

app.use('/', router);

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/css/demo.css'));
app.use(express.static(__dirname + '/css/materialize.min.css'));
app.use(express.static(__dirname + '/css/style.css'));
app.use(express.static(__dirname + '/js/base.js'));
app.use(express.static(__dirname + '/js/materialize.min.js'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

