const { calculateHcf } = require("./hcf.service");

const lcmTwoNumbers = (a, b) => {
  return Math.abs(a * b) / calculateHcf([a, b]);
};

const calculateLcm = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Invalid lcm input");
  }

  return arr.reduce((acc, val) => lcmTwoNumbers(acc, val));
};

module.exports = {
  calculateLcm
};
