import { MAX_GUESSES } from "utils"

export interface AppProps {
  selectedStepNumber: number
  currentGuess: GuessRequest
  guesses: GuessType[]
  isGameOver: boolean
  isGameWon: boolean
  hints: HintType[]
  numberOfGuesses: number
  cardList: CardListCard[]
  winningGuessNumber?: number
  hp: HpType
  hint: string
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
  hp: { current: MAX_GUESSES, max: MAX_GUESSES },
  hint: "",
}

export type HintType = {
  hintNumber: number
  givenHint: { hintText: string; hintValue: string }
}

export type GuessRequest = {
  cardName: string
}

export type HpType = {
  current: number
  max: number
}

export type GuessType = {
  name: string
  manaCost: string
  colors: string[]
  rarity: string
  setName: string
  power: string
  toughness: string
  imageUrl: string
  cmc: number
  subtypes: string[]
  attributeCorrectness: {
    cmc: string
    colors: string
    power: string
    rarity: string
    set: string
    subtypes: string
    toughness: string
  }
}

export type CardListCard = {
  name: string
  id: string
}
export type ColorCode = "R" | "U" | "W" | "B" | "C" | "G" | "T"
