const express = require("express");
const AppError = require("./ErrorController/appError");
const tourRouter = require("./Router/userRouter");
const globalErrorHandler=require('./ErrorController/globalError');
const cors=require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//built-in middleware function in Express. It parses incoming requests with JSON
app.use(express.json());
// Cross-origin resource sharing (CORS) is a mechanism
app.use(cors());
app.use(express.static(`${__dirname}/starter/public`));
//Handling base route
app.use("/api/v1/user", tourRouter);
// Handling unexpcted routes
app.all("*", (req, res, next) => {
  next( new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler.globalError);

module.exports = app;
