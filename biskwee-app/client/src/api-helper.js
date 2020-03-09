import axios from "axios";

const baseUrl = "http://localhost:3000";
const api = axios.create({
  baseURL: baseUrl
});

const newUser = async formData => {
  const res = await api.post(`${baseUrl}/users`, formData);
  console.log("api-newUser", res.data);
};

export default { newUser };
