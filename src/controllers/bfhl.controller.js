const { successResponse } = require("../utils/response.util");
const { generateFibonacci } = require("../services/math/fibonacci.service");
const { filterPrimes } = require("../services/math/prime.service");
const { calculateHcf } = require("../services/math/hcf.service");
const { calculateLcm } = require("../services/math/lcm.service");
const { getAiAnswer } = require("../services/ai.service");

const handleBfhl = async (req, res, next) => {
  const { type, value } = req.bfhl;

  try {
    let result;

    switch (type) {
      case "fibonacci":
        result = generateFibonacci(value);
        break;

      case "prime":
        result = filterPrimes(value);
        break;

      case "hcf":
        result = calculateHcf(value);
        break;

      case "lcm":
        result = calculateLcm(value);
        break;

      case "AI":
        result = await getAiAnswer(value);
        break;

      default:
        const error = new Error("Unsupported operation");
        error.statusCode = 400;
        throw error;
    }

    return successResponse(res, result);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleBfhl
};
