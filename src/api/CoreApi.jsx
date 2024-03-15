import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://partner-bcc-5766988095ba.herokuapp.com/",
});

export { axiosInstance };
