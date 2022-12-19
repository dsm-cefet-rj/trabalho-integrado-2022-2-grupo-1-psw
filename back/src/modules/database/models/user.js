const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user:{
    type : String,
    required : true
  },
  email: {
    type : String,
    required : true
  },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password) { 
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.validPassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};

const User = mongoose.model('User', userSchema);

module.exports = User;