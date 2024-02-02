import { GuessRequest } from "types"
import axiosInstance from "../utils/axiosConfig"

export const createGuess = async (guess: GuessRequest) => {
  try {
    const response = await axiosInstance.post(`/guess2`, guess)
    return response.data
  } catch (error) {
    // Handle error
    console.error(error)
  }
}
