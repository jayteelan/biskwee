import axios from "axios";

const baseUrl = "http://localhost:3000";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.authToken}`
  },
  baseURL: baseUrl
});

const loginUser = async formData => {
  const res = await api.post(`/api/v1/auth`, formData);
  console.log("login", res);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;

  console.log("auth", localStorage.authToken);
  return res.data.token;
};

const createNewUser = async formData => {
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

const getData = async (endpoint, id) => {
  const res = await api.get(`/api/${endpoint}/${id}`);
  return res.data;
};
const getAllData = async endpoint => {
  const res = await api.get(`/api/${endpoint}/`);
  // console.log(res.data);
  return res.data;
};

const updateRecord = async (id, newData) => {
  const res = await api.put(`/api/recipes/${id}`, { recipe: newData });
  console.log(res.data);
  return res.data;
};

const deleteRecord = async id => {
  const res = await api.delete(`/api/recipes/${id}`);
  return res.data;
};

const newRecipe = async data => {
  const res = await api.post("/api/recipes", { recipe: data });
  return res.data;
};

export {
  loginUser,
  createNewUser,
  getData,
  getAllData,
  updateRecord,
  deleteRecord,
  newRecipe
};
