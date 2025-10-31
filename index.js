const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const tourRoutes = require("./routes/tourRoutes");

const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION
const connection = require("./database/connection");
connection();

// ROUTES
app.get("/", (req, res) => {
  res.send("Natours API is running");
});

app.use("/api/tour", tourRoutes);

app.use((req, res,next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    messsage: err.message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
