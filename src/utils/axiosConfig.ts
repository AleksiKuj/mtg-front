import axios from "axios"
import { API_URL } from "./constants"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export default axiosInstance
