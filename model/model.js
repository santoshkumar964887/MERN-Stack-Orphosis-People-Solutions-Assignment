const mongooes = require("mongoose");
const userSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },
  LastName: {
    type: String,
    required: [true, "A user must have a name"],

    trim: true,
  },
  Email: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
    trim: true,
  },
  BOB: {
    type: String,
    required: [true, "A user must have a name"],

    trim: true,
  },
  Short_BIO: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },
});


const userModel = mongooes.model("User",userSchema);
module.exports = userModel;
