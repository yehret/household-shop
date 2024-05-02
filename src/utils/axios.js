import axios from "axios";

const instance = axios.create({
   baseURL: `http://localhost:8800/api/`,
   withCredentials: true,
   credentials: 'include',
})

export default instance;