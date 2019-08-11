const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.all = function(cb) {
  db.get()
    .collection('costs')
    .find()
    .toArray(function(err, docs) {
      cb(err, docs);
    });
};

exports.findById = function(id, cb) {
  db.get()
    .collection('costs')
    .findOne({ _id: ObjectID(id) }, function(err, doc) {
      cb(err, doc);
    });
};

exports.findByCategory = function(category, cb) {
  db.get()
    .collection('costs')
    .find({ categories: `"${category}"` }, function(err, doc) {
      cb(err, doc);
    });
};

exports.create = function(cost, cb) {
  db.get()
    .collection('costs')
    .insert(cost, function(err, result) {
      cb(err, result);
    });
};

exports.update = function(id, newData, cb) {
  db.get()
    .collection('costs')
    .updateOne({ _id: ObjectID(id) }, newData, function(err, result) {
      cb(err, result);
    });
};

exports.delete = function(id, cb) {
  db.get()
    .collection('costs')
    .deleteOne({ _id: ObjectID(id) }, function(err, result) {
      cb(err, result);
    });
};
