const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Place = new Schema ({place: String})
// Create Schema
const UserSchema = new Schema({
  googleId: String,
  displayName: String,
  placesVisited:[Place]
});

module.exports = User = mongoose.model("users", UserSchema);