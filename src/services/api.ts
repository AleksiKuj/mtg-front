import axiosInstance from "utils/axiosConfig"
import axios from "axios"

//generic get call
export const fetchData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)
    return response.data
  } catch (e) {
    console.error(e)
  }
}
export const fetchExternalData = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (e) {
    console.error(e)
  }
}
