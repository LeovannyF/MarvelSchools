const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const {syncSeed} = require('../db/models');


app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
  console.log(`i am listening on port, ${port}`);
});

syncSeed();

module.exports = {
  app
}
