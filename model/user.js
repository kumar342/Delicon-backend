const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: false,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  city: {
    type: String,
    required: true,
    unique: false,
  },
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
