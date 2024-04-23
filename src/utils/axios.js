import axios from "axios";

const instance = axios.create({
   baseURL: `http://${import.meta.env.VITE_API_SERVER}/api/`,
   withCredentials: true,
   headers: {
      'Cache-Contol': 'no-cache',
      'Pragma': 'no-cache',
      'Content-Type': 'application/json'
   }
})

export default instance;