const userModel = require("../model/model");
const catchAsync = require("../ErrorController/AsyncError");
const AppError = require("../ErrorController/appError");
// Geting all user data
exports.getAlluser = catchAsync(async (req, res, next) => {
  let query = userModel.find();
  const user = await query;
  res.status(200).json({
    status: "success",
    length: user.length,
    data: {
      user,
    },
  });
});
//gating one user data given id
exports.getOneuser = catchAsync(async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return next(new AppError("can not found value this id", 404));
  }
  res.status(200).json({
    status: "success",
    length: user.length,
    data: {
      user,
    },
  });
});
// creating and storing new user
exports.createNewuser = catchAsync(async (req, res) => {
  let data = await userModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});
// Updating existing user data
exports.updateuser = catchAsync(async (req, res) => {
  const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    return next(new AppError("can not found value this id", 404));
  }

  res.status(200).json({
    status: "success",
    length: user.length,
    data: {
      user,
    },
  });
});
// Deleting user
exports.deleteOneuser = catchAsync(async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new AppError("can not found value this id", 404));
  }

  res.status(200).json({
    status: "success",
  });
});
