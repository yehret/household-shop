import axios from "axios";

const instance = axios.create({
   baseURL: `http://localhost:8800/api/`,
   withCredentials: true,
})

export default instance;