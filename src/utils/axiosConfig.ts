import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api/v1",
})

export default axiosInstance
