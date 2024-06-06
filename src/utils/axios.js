import axios from "axios";

const instance = axios.create({
   baseURL: 'https://household-server.onrender.com/api',
   withCredentials: true,
   credentials: 'include',
})

export default instance;