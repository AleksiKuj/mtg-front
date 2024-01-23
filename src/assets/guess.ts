import axios from "axios"

const API_URL = "http://localhost:8080"

export const guess = async (data: GuessRequest) => {
  try {
    const response = await axios.post(API_URL, data)
    return response
  } catch (e) {
    console.log(e)
  }
}
