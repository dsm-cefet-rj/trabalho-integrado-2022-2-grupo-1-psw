import api from "./api";

export async function EquipeCreate(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/new", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

// export function EquipeLoad(equipe_name){
//   api.get('/equipe/get/'+equipe_name);
// }

export async function EquipeLoadAll(userObject) {
  try {
    const { data } = await api.get("/equipe/get-all/" + userObject.email);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

// export function EquipeSave(EquipeObject){
//   api.post('/equipe/update', EquipeObject)
// }

export async function EquipeDelete(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/delete", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

export async function EquipeAddMember(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/add-member", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

export async function EquipeRemoveMember(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/remove-member", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

export async function EquipeAddProduto(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/add-produto", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

export async function EquipeRemoveProduto(EquipeObject) {
  try {
    const { data } = await api.post("/equipe/remove-produto", EquipeObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}