import { Guess } from "types"
import { AppContextType } from "./AppContext"

const useAppContextState = (appContext: AppContextType) => {
  const changeCurrentGuess = (guess: string) => {
    appContext.setData((prevState) => ({
      ...prevState,
      currentGuess: { cardName: guess },
    }))
  }

  const addGuess = (guess: Guess) => {
    appContext.setData((prevState) => ({
      ...prevState,
      guesses: prevState.guesses.concat(guess),
    }))
  }

  const setIsGameOver = (isGameOver: boolean) => {
    appContext.setData((prevState) => ({
      ...prevState,
      isGameOver,
    }))
  }
  const setIsGameWon = (isGameWon: boolean) => {
    appContext.setData((prevState) => ({
      ...prevState,
      isGameWon,
    }))
  }

  const incrementStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: prevState.selectedStepNumber + 1,
    }))
  }

  return {
    changeCurrentGuess,
    incrementStepNumber,
    addGuess,
    setIsGameOver,
    setIsGameWon,
  }
}

export default useAppContextState
