const express = require('express');
const app = express();
const path = require("path");
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const {syncSeed} = require('../db/models');
const router = require('./routes');




app.use(morgan("dev"));
app.use('/api', router)
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json)

app.listen(port, () => {
  console.log(`I am listening on port, ${port}`);
});

syncSeed();

module.exports = {
  app
}
