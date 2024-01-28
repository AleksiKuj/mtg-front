import Step from "./Step"
import { Button } from "components/Common"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { createGuess } from "services/guessService"
import { Guess, GuessRequest } from "types"
import { MAX_GUESSES } from "utils"

const Steps = () => {
  const appContext = useAppContext()
  const { selectedStepNumber, isGameOver } = appContext.data
  const {
    incrementStepNumber,
    addGuess,
    setIsGameOver,
    setIsGameWon,
    setHints,
    incrementNumberOfGuesses,
  } = useAppContextState(appContext)

  const handleSkip = async () => {
    const guessData: GuessRequest = { cardName: "" }
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
    setHints(response.hintsProvided)
    incrementNumberOfGuesses()
  }

  return (
    <div className="flex flex-row gap-2 py-2">
      <Step stepNumber={1} />
      <Step stepNumber={2} />
      <Step stepNumber={3} />
      <Step stepNumber={4} />
      <Step stepNumber={5} />
      <Step stepNumber={6} />
      {isGameOver && <Step stepNumber={7} />}
      {!isGameOver && (
        <Button
          text="Skip"
          onClick={handleSkip}
          className="bg-emerald-700"
          isDisabled={selectedStepNumber > 6}
        />
      )}
    </div>
  )
}
export default Steps
