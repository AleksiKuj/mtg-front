import { Button } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import Select from "react-select"
import { createGuess } from "services/guessService"
import { Guess, GuessRequest } from "types"
import { MAX_GUESSES } from "utils"

const GuessInput = () => {
  const appContext = useAppContext()
  const { currentGuess, isGameOver, isGameWon } = appContext.data
  const {
    changeCurrentGuess,
    incrementStepNumber,
    addGuess,
    setIsGameOver,
    setIsGameWon,
  } = useAppContextState(appContext)

  const options = [
    { value: "Kasla, the Broken Halo", label: "Kasla, the Broken Halo" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]

  const handleSubmit = async () => {
    const guessData: GuessRequest = currentGuess
    const response = await createGuess(guessData)
    incrementStepNumber()

    const guess: Guess = {
      cardName: response.guess,
      isCorrect: response.isCorrect,
    }
    if (
      response.numberOfGuesses >= MAX_GUESSES ||
      response.gameStatus === "WON"
    ) {
      setIsGameOver(true)
    }
    response.gameStatus === "WON" ? setIsGameWon(true) : setIsGameWon(false)
    addGuess(guess)
  }

  return (
    <div className="text-black w-full flex flex-col gap-2">
      <Select
        options={options}
        onChange={(e) => {
          if (e) changeCurrentGuess(e.value)
        }}
      />
      <Button
        text="Submit"
        onClick={handleSubmit}
        className="bg-emerald-700 w-full text-white"
      />
      <p>
        {isGameOver.toString()} {isGameWon.toString()}
      </p>
    </div>
  )
}
export default GuessInput
