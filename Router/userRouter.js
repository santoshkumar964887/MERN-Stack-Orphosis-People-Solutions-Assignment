const express = require("express");
const userControlle = require("../controller/usercontroler");
const userRouter = express.Router();
//Handling base routes
userRouter
  .route("/")
  .get(userControlle.getAlluser)
  .post(userControlle.createNewuser);
//handling params routes
userRouter
  .route("/:id")
  .get(userControlle.getOneuser)
  .patch(userControlle.updateuser)
  .delete(userControlle.deleteOneuser);
module.exports = userRouter;
