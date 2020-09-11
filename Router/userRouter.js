const express = require("express");
const userControlle = require("../controller/usercontroler");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(userControlle.getAlluser)
  .post(userControlle.createNewuser);
userRouter
  .route("/:id")
  .get(userControlle.getOneuser)
  .patch(userControlle.updateuser)
  .delete(userControlle.deleteOneuser);
module.exports = userRouter;
