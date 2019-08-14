const Costs = require('../models/costs');
const moment = require('moment');

exports.findById = function(req, res) {
  Costs.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.findByCategory = function(req, res) {
  const category = req.query.category;

  Costs.findByCategory(category, function(err, doc) {
    if (err) {
      console.log(err);

      //   )`Cost in category ${category} not found`);
      return res.sendStatus(500);
    }

    res.send(doc);
  });
};

exports.create = function(req, res) {
  const cost = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    created: req.body.created,
    modified: req.body.modified,
    categories: req.body.categories,
  };
  Costs.create(cost, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(cost);
  });
};
//upd price
exports.update = function(req, res) {
  let toSet = { modified: moment().format('DD-MM-YYYY') };

  Object.keys(req.body).forEach(function(key) {
    const val = req.body[key];
    toSet[key] = val;
  });

  Costs.update(req.params.id, { $set: toSet }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = function(req, res) {
  Costs.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
