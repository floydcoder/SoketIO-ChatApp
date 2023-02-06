const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});
