import api from "./api";

export async function EtapaGet(userObject){
  try{

    const {data} = await api.get('/etapa/get/'+userObject.email);
    return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}

export async function EtapaCreate(etapaObject){
  try{

  const {data} = await api.post('/etapa/new', etapaObject);
  return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}

export async function EtapaRemove(etapaObject){
  try{

  const {data} = await api.post('/etapa/remove', etapaObject);
  return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}