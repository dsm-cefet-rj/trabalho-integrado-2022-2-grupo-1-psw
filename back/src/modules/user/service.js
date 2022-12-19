const UserModel = require('../database/models/user');

async function Login(email, password) {
  const user = await UserModel.findOne({email});
  if(!!user){
    
  }else{
    return false;
  }
}

module.exports = {
  Login
}