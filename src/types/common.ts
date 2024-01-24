export interface AppProps {
  selectedStepNumber: number
  currentGuess: GuessRequest
  guesses: Guess[]
  isGameOver: boolean
  isGameWon: boolean
}

export const defaultAppProps: AppProps = {
  selectedStepNumber: 1,
  currentGuess: { cardName: "" },
  guesses: [],
  isGameOver: false,
  isGameWon: false,
}

export type GuessRequest = {
  cardName: string
}

export type Guess = {
  cardName: string
  isCorrect: boolean
}
