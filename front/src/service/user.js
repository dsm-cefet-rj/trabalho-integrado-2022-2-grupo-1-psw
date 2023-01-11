import api from "./api";

export async function UserLogin(userObject) {
  try {
    const { data } = await api.post("/user/login", userObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}

export async function UserRegister(userObject) {
  try {
    const { data } = await api.post("/user/register", userObject);
    return data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
}
