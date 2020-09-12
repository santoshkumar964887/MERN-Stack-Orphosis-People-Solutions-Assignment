const express = require("express");
const AppError = require("./ErrorController/appError");
const tourRouter = require("./Router/userRouter");
const globalErrorHandler=require('./ErrorController/globalError');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/starter/public`));
app.use("/api/v1/user", tourRouter);
app.all("*", (req, res, next) => {
  next( new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler.globalError);

module.exports = app;
