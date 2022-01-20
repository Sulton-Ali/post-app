
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  surname: String,
  country: String,
  city: String,
  address: String,
  posts: [String],
});

module.exports = model('User', userSchema);
