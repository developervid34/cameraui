const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from Vue's build folder
app.use(express.static(path.join(__dirname, "ui", "dist")));

// Handle SPA (Vue Router) fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "ui", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
