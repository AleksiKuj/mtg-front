export interface AppProps {
  currentGuess: GuessRequest
  guesses: GuessType[]
  isGameOver: boolean
  isGameWon: boolean
  cardList: CardListCard[]
  winningGuessNumber?: number
  hp: HpType
  hint: string
  maxGuesses: number
  targetCard?: GuessType
  timeUntilReset?: number
}

export const defaultAppProps: AppProps = {
  currentGuess: { cardName: "" },
  guesses: [],
  isGameOver: false,
  isGameWon: false,
  cardList: [],
  hp: { current: 10, max: 10 },
  hint: "",
  maxGuesses: 10,
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
  colors: ColorCode[]
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
  type?: string
  correct?: boolean
}

export type CardListCard = {
  name: string
  id: string
}
export type ColorCode = "R" | "U" | "W" | "B" | "C" | "G" | "T"
