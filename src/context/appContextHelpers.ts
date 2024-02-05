import { CardListCard, GuessType } from "types"
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
  const setCardList = (cardList: CardListCard[]) => {
    appContext.setData((prevState) => ({
      ...prevState,
      cardList,
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
    setIsGameOver,
    setIsGameWon,
    setCardList,
    setWinningGuessNumber,
    setGuesses,
    setCurrentHp,
    setHint,
    setHp,
    setMaxGuesses,
    setTargetCard,
    setTimeUntilReset,
  }
}

export default useAppContextState
