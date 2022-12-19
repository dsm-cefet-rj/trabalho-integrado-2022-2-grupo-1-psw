const UserModel = require('../database/models/user');

async function GetService (email) {
  try{
    const user = await UserModel.findOne({email});
    return {
      data:{
        username:user.user,
        email:user.email,
        equipes: user.equipes
      }
    }
  }catch(e){
    return {error:e}
  }
}

async function LoginService (email, pass) {
  let error;

  try{
    const user = await UserModel.findOne({email});

    if(!!user){
      valid = user.validPassword(pass);

      if(valid){
        return { data:true };
      }else{
        error = new Error("Invalid password!");
      }

    }else{
      error = new Error("User not found!");
    }
  }catch(e){
    error = e;
  }

  return {error};
  
}

async function RegisterService(username, email, pass) {

  try{
    const user = await UserModel.create({user:username, email});
    await user.setPassword(pass);
    await user.save();
    return { data:true };
  }catch(e){
    return { error:e };
  }

}

module.exports = {
  LoginService,
  RegisterService,
  GetService
}