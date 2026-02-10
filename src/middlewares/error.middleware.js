const errorMiddleware = (err, req, res, next) => {
  console.error("❌ ERROR:", err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    is_success: false,
    error: err.message || "Internal Server Error"
  });
};

module.exports = errorMiddleware;
