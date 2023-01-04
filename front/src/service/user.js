import api from "./api";

export async function login(userObject){
  try{

    const {data} = await api.post('/login', userObject);
    return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}

export async function register(userObject){
  try{

  const {data} = await api.post('/register', userObject);
  return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}