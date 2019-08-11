const Costs = require('../models/costs');

exports.all = function(req, res) {
  Costs.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

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

exports.update = function(req, res) {
  Costs.update(req.params.id, { $set: { price: req.body.price } }, function(
    err,
    result,
  ) {
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
