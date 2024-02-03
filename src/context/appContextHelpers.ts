import { CardListCard, Guess, HintType } from "types"
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

  const setGuesses = (guesses: Guess[]) => {
    appContext.setData((prevState) => ({
      ...prevState,
      guesses,
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
  const setCardList = (cardList: CardListCard[]) => {
    appContext.setData((prevState) => ({
      ...prevState,
      cardList,
    }))
  }
  const incrementStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: prevState.selectedStepNumber + 1,
    }))
  }
  const setStepNumber = (num: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: num,
    }))
  }
  const setWinningGuessNumber = (num: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      winningGuessNumber: num,
    }))
  }
  const setHint = (hint: string) => {
    appContext.setData((prevState) => ({
      ...prevState,
      hint,
    }))
  }
  const incrementNumberOfGuesses = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      numberOfGuesses: prevState.numberOfGuesses + 1,
    }))
  }
  const decrementHp = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      hp: { current: prevState.hp.current - 1, max: prevState.hp.max },
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
    setCardList,
    setStepNumber,
    setWinningGuessNumber,
    setGuesses,
    decrementHp,
    setHint,
  }
}

export default useAppContextState
