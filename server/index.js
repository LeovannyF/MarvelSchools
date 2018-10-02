const express = require('express');
const app = express();
const path = require("path");
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const {syncSeed} = require('../db/models');
const router = require('./routes');

app.use(express.json());
app.use(morgan("dev"));
app.use('/api', router);
app.use(express.static(path.join(__dirname, "../dist")));

const index = path.join(__dirname, '../dist/index.html');

app.get('/', (req, res, next) => {
  res.sendFile(index)
})

app.listen(port, () => {
  console.log(`I am listening on port, ${port}`);
});

syncSeed();
