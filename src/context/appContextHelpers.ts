import { Guess, HintType } from "types"
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
  const setHints = (hints: HintType[]) => {
    appContext.setData((prevState) => ({
      ...prevState,
      hints,
    }))
  }
  const addHint = (hint: HintType) => {
    appContext.setData((prevState) => ({
      ...prevState,
      hints: prevState.hints.concat(hint),
    }))
  }
  const incrementStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: prevState.selectedStepNumber + 1,
    }))
  }
  const incrementNumberOfGuesses = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      numberOfGuesses: prevState.numberOfGuesses + 1,
    }))
  }

  return {
    changeCurrentGuess,
    incrementStepNumber,
    addGuess,
    setIsGameOver,
    setIsGameWon,
    setHints,
    incrementNumberOfGuesses,
    addHint,
  }
}

export default useAppContextState
