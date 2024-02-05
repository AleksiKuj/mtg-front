import { GuessRequest } from "types"
import axiosInstance from "../utils/axiosConfig"

export const createGuess = async (guess: GuessRequest) => {
  try {
    const response = await axiosInstance.post(`/guess`, guess)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
