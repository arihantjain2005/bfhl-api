const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  OFFICIAL_EMAIL: process.env.OFFICIAL_EMAIL
};
