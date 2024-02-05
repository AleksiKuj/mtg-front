import axiosInstance from "utils/axiosConfig"

//generic get call
export const fetchData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)
    return response.data
  } catch (e) {
    console.error(e)
  }
}
