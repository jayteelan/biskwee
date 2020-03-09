import axios from "axios";

const baseUrl = "http://localhost:3000";
const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  baseURL: baseUrl
});

const loginUser = async formData => {
  const res = await api.post(`/api/v1/auth`, formData);
  console.log("login", res);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.token;
};

const newUser = async formData => {
  try {
    // create new user
    const res = await api.post(`/users`, formData);
    console.log("api-newUser", res.data);
    // log in new user
    loginUser(formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, newUser };
