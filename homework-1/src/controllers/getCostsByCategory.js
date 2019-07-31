const fs = require('fs');
const costsAll = './src/db/costs/all-costs.json';

function getCostsByCategory(req, res) {
  const category = req.query.category;

  fs.readFile(costsAll, (err, data) => {
    if (err) {
      return console.error(err);
    }

    const costs = JSON.parse(data.toString());

    if (!category) {
      return res.status(200).json(costs);
    }

    const costsByCategory = costs.filter(cost =>
      cost.categories.includes(category),
    );

    let answerStatus = 'success';

    if (!costsByCategory.length) {
      answerStatus = `Cost in category ${category} not found`;
    }

    const response = {
      status: answerStatus,
      costs: costsByCategory,
    };

    res.status(200).json(response);
  });
}

module.exports = getCostsByCategory;
