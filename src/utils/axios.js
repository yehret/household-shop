import axios from "axios";

const instance = axios.create({
   baseURL: 'household-server.vercel.app',
   withCredentials: true,
   credentials: 'include',
})

export default instance;