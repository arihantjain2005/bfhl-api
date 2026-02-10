const { successResponse } = require("../utils/response.util");

const healthCheck = (req, res) => {
  return successResponse(res);
};

module.exports = {
  healthCheck
};
