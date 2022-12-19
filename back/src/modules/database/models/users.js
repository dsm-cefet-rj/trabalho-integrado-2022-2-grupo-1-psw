const conn = require('../api');

const userSchema = new mongoose.Schema({
  email: String,
  pass: String
});

userSchema.methods.auth = (pass) => {
  
};


const User = mongoose.model('User', userSchema);