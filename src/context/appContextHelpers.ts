import { CardListCard, GuessType, HintType } from "types"
import { AppContextType } from "./AppContext"

const useAppContextState = (appContext: AppContextType) => {
  const changeCurrentGuess = (guess: string) => {
    appContext.setData((prevState) => ({
      ...prevState,
      currentGuess: { cardName: guess },
    }))
  }

  const setGuesses = (guesses: GuessType[]) => {
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
  const setHp = (hp: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      hp: { current: hp, max: hp },
    }))
  }
  const setCurrentHp = (hp: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      hp: { current: hp, max: prevState.hp.max },
    }))
  }
  const setMaxGuesses = (maxGuesses: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      maxGuesses,
    }))
  }
  const decrementHp = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      hp: { current: prevState.hp.current - 1, max: prevState.hp.max },
    }))
  }
  const setTargetCard = (targetCard: GuessType) => {
    appContext.setData((prevState) => ({
      ...prevState,
      targetCard,
    }))
  }
  const setTimeUntilReset = (timeUntilReset: number) => {
    appContext.setData((prevState) => ({
      ...prevState,
      timeUntilReset,
    }))
  }

  return {
    changeCurrentGuess,
    incrementStepNumber,
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
    setCurrentHp,
    setHint,
    setHp,
    setMaxGuesses,
    setTargetCard,
    setTimeUntilReset,
  }
}

export default useAppContextState
