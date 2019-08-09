const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./src/db');
const costsController = require('./src/controllers/costs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello API');
});

app.get('/costs', costsController.all);

app.get('/costs/:id', costsController.findById);

app.get('/costs', costsController.findByCategory);

app.post('/costs', costsController.create);

app.put('/costs/:id', costsController.update);

app.delete('/costs/:id', costsController.delete);

db.connect(
  'mongodb://user1:12345user@nodejshw-shard-00-00-rxfzp.gcp.mongodb.net:27017,nodejshw-shard-00-01-rxfzp.gcp.mongodb.net:27017,nodejshw-shard-00-02-rxfzp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=nodejshw-shard-0&authSource=admin&retryWrites=true&w=majority',

  function(err) {
    if (err) {
      return console.log(err);
    }
    app.listen(3012, function() {
      console.log('API app started');
    });
  },
);
