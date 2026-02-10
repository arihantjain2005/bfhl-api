const app = require("./app");
const { PORT } = require("./config/env.config");

// Local development only
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

// IMPORTANT: export app for Vercel
module.exports = app;
