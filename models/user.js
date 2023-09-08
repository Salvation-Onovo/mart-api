const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your Name']
  },
  email: {
    type: String,
    require: [true, 'Please enter your Email']
  },
  password: {
    type: String,
    require: [true, 'Please enter your Password']
  },
  image: {
    type: String,
    default: null
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: "user"
  }
})

module.exports = mongoose.model("user", userSchema)