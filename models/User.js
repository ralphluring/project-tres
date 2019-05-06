const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  googleId: String,
  displayName: String,
  placesVisited:[String]
});

module.exports = User = mongoose.model("users", UserSchema);