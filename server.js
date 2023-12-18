const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const participantRouter = require("./routes/participants");
const dbConnection = require("./db").connection;
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 6790;

// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

// Endpoint to receive participant data
app.use("/exams", participantRouter);
app.use("/", (req, res) => res.send("Web Portal Works"));

// Start the server
app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
