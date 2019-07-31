const fs = require('fs');
const costsAll = './src/db/costs/all-costs.json';

function getCostById(req, res) {
  const id = req.params.id;
  let answerStatus = 'success';

  fs.readFile(costsAll, (err, data) => {
    if (err) {
      return console.error(err);
    }

    const costs = JSON.parse(data.toString());
    const costById = costs.find(cost => cost.id === Number(id));

    if (!costById) {
      answerStatus = `Cost with ID ${id} not found`;
    }

    const response = {
      status: answerStatus,
      products: [costById],
    };

    res.status(200).json(response);
  });
}

module.exports = getCostById;
