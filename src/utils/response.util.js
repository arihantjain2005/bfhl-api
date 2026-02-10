const successResponse = (res, data = null, statusCode = 200) => {
  const response = {
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL
  };

  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

module.exports = {
  successResponse
};
