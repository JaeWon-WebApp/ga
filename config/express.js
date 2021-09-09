const express = require('express');
const cors = require('cors');

module.exports = function () {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  require('../src/Admin/adminRoute')(app);

  return app;
}