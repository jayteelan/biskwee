import axios from "axios";

const baseUrl = "http://localhost:3000";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.authToken}`
  },
  baseURL: baseUrl
});

/* ---------- LOGIN/SIGNUP ---------- */
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

/* ---------- CREATE ---------- */
const newRecipe = async data => {
  const res = await api.post("/api/recipes", data);
  return res.data;
};

const newIngredLine = async (recipeId, data) => {
  const res = await api.post(`/api/recipes/${recipeId}/ingred_lines/`, data);
  return res.data;
};

/* ---------- READ ---------- */
const getData = async (endpoint, id) => {
  const res = await api.get(`/api/${endpoint}/${id}`);
  return res.data;
};

const getAllData = async endpoint => {
  const res = await api.get(`/api/${endpoint}/`);
  return res.data;
};

const getIngredLine = async (recipeId, ingredLineId) => {
  const res = await api.get(
    `/api/recipes/${recipeId}/ingred_lines/${ingredLineId}`
  );
  return res.data;
};

const getAllIngredLines = async recipeId => {
  const res = await api.get(`/api/recipes/${recipeId}/ingred_lines`);
  return res.data;
};

/* ---------- UPDATE ---------- */
const updateRecipe = async (id, newData) => {
  const res = await api.put(`/api/recipes/${id}`, newData);
  console.log(res.data);
  return res.data;
};

const updateIngredLine = async (recipeId, ingredLineId, newData) => {
  const res = await api.put(
    `/api/recipes/${recipeId}/ingred_lines/${ingredLineId}`,
    newData
  );
  console.log(res.data);
  return res.data;
};

/* ---------- DESTROY ---------- */
const deleteRecipe = async id => {
  const res = await api.delete(`/api/recipes/${id}`);
  return res.data;
};
const deleteIngredLine = async (recipeId, ingredLineId) => {
  const res = await api.delete(
    `/api/recipes/${recipeId}/ingred_lines/${ingredLineId}`
  );
  return res.data;
};

export {
  loginUser,
  createNewUser,
  newRecipe,
  newIngredLine,
  getData,
  getAllData,
  getIngredLine,
  getAllIngredLines,
  updateRecipe,
  updateIngredLine,
  deleteRecipe,
  deleteIngredLine
};
