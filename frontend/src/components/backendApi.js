import axios from "axios";

const apiURL = "http://localhost:8000";

axios.defaults.withCredentials = true;

export const registerUser = async (postData) => {
  return await axios.post(apiURL + "/users/register/", postData);
};

export const callLogin = async (postData) => {
  return await axios.post(apiURL + "/users/login/", postData);
};

export const callLogout = async () => {
  return axios.post(apiURL + "/users/logout/");
};
