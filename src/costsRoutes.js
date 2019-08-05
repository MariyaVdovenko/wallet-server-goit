const { Router } = require("express");
const fs = require("fs");
const router = Router();
const getCostById = require("./controllers/getCostById");
const getCostsByCategory = require("./controllers/getCostsByCategory");

const costsAll = "./src/db/costs/all-costs.json";

router.get("/:id", getCostById);
router.get("/", getCostsByCategory);

module.exports = router;
