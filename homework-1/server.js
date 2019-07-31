const express = require('express');
const corsMiddleware = require('cors');
const app = express();
const costsRouts = require('./src/costsRoutes.js');

app.use(express.json());
app.use(corsMiddleware());

app.use('/costs', costsRouts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server is running on port - ' + PORT);
});
