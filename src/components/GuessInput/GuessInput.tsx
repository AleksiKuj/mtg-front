import { Button } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useMemo, useState } from "react"
import Select from "react-select"
import { createGuess } from "services/guessService"
import { Guess, GuessRequest } from "types"
import { MAX_GUESSES } from "utils"

type OptionType = { label: string; value: string } | null
const GuessInput = () => {
  const appContext = useAppContext()
  const { currentGuess, isGameOver, isGameWon, cardList } = appContext.data
  const {
    changeCurrentGuess,
    incrementStepNumber,
    addGuess,
    setIsGameOver,
    setIsGameWon,
    setHints,
    incrementNumberOfGuesses,
    setStepNumber,
  } = useAppContextState(appContext)
  const [inputValue, setInputValue] = useState("")
  const [selectedValue, setSelectedValue] = useState<OptionType>(null)
  const filteredOptions = useMemo(() => {
    if (inputValue.length < 2) return []

    return cardList
      .filter((card) =>
        card.name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((card) => ({ label: card.name, value: card.name }))
  }, [inputValue, cardList])

  const handleSubmit = async () => {
    const guessData: GuessRequest = currentGuess
    const response = await createGuess(guessData)
    incrementStepNumber()
    if (response.numberOfGuesses === null) return
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

    if (response.gameStatus === "WON") {
      setIsGameWon(true)
      setStepNumber(MAX_GUESSES + 1)
    } else {
      incrementStepNumber()
    }
    addGuess(guess)
    setHints(response.hintsProvided)
    changeCurrentGuess("")
    setSelectedValue(null)
  }
  const handleOnChange = (e: OptionType | null) => {
    if (e) {
      changeCurrentGuess(e.value)
      setSelectedValue({ label: e.label, value: e.value })
    } else {
      setSelectedValue(null)
    }
  }

  return (
    <div className="text-black w-full flex flex-col gap-2">
      <Select
        options={filteredOptions}
        onInputChange={(e) => setInputValue(e)}
        onChange={handleOnChange}
        placeholder="Type to search cards"
        value={selectedValue}
      />
      {!isGameOver && (
        <Button
          text="Submit"
          onClick={handleSubmit}
          className="bg-emerald-700 w-full text-white"
        />
      )}
      <p>
        {isGameOver.toString()} {isGameWon.toString()}
      </p>
    </div>
  )
}
export default GuessInput
