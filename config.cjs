// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Rushmd~0cXsyAi6",
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || "public",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true"
  };


module.exports = config;
