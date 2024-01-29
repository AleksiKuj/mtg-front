export interface AppProps {
  selectedStepNumber: number
  currentGuess: GuessRequest
  guesses: Guess[]
  isGameOver: boolean
  isGameWon: boolean
  hints: HintType[]
  numberOfGuesses: number
  cardList: CardListCard[]
  winningGuessNumber?: number
}

export const defaultAppProps: AppProps = {
  selectedStepNumber: 1,
  numberOfGuesses: 0,
  currentGuess: { cardName: "" },
  guesses: [],
  isGameOver: false,
  isGameWon: false,
  hints: [],
  cardList: [],
}

export type HintType = {
  hintNumber: number
  givenHint: { hintText: string; hintValue: string }
}

export type GuessRequest = {
  cardName: string
}

export type Guess = {
  cardName: string
  isCorrect: boolean
}

export type CardListCard = {
  name: string
  id: string
}
export type ColorCode = "R" | "U" | "W" | "B" | "C" | "G"
