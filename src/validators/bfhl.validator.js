const ALLOWED_KEYS = ["fibonacci", "prime", "lcm", "hcf", "AI"];

const validateBfhlRequest = (req, res, next) => {
  const body = req.body;

  // Body must exist
  if (!body || typeof body !== "object") {
    return res.status(400).json({
      is_success: false,
      error: "Request body must be a valid JSON object"
    });
  }

  const keys = Object.keys(body);

  // Exactly one key required
  if (keys.length !== 1) {
    return res.status(400).json({
      is_success: false,
      error: "Request must contain exactly one key"
    });
  }

  const key = keys[0];

  // Allowed key check
  if (!ALLOWED_KEYS.includes(key)) {
    return res.status(422).json({
      is_success: false,
      error: "Invalid key provided"
    });
  }

  // Value should not be undefined or null
  if (body[key] === undefined || body[key] === null) {
    return res.status(422).json({
      is_success: false,
      error: "Value for the key cannot be null or undefined"
    });
  }

  // Attach validated data for controller
  req.bfhl = {
    type: key,
    value: body[key]
  };

  next();
};

module.exports = {
  validateBfhlRequest
};
