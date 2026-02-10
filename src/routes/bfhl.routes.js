const express = require("express");
const { handleBfhl } = require("../controllers/bfhl.controller");
const { validateBfhlRequest } = require("../validators/bfhl.validator");

const router = express.Router();

router.post("/bfhl", validateBfhlRequest, handleBfhl);

module.exports = router;
