const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    system: "Houthari Net Management System",
    version: "1.0",
    status: "running"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
