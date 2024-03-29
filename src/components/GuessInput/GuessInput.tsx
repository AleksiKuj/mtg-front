import { Button, HintButton } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useMemo, useState } from "react"
import Select from "react-select"
import { createGuess } from "services/guessService"
import { GuessType, GuessRequest } from "types"

type OptionType = { label: string; value: string } | null
const GuessInput = () => {
  const appContext = useAppContext()
  const { currentGuess, isGameOver, guesses, cardList } = appContext.data
  const {
    changeCurrentGuess,
    setIsGameOver,
    setIsGameWon,
    setGuesses,
    setWinningGuessNumber,
    setCurrentHp,
    setTargetCard,
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

  if (isGameOver) return null

  const handleSubmit = async () => {
    const guessData: GuessRequest = currentGuess
    const guessExists = guesses.some(
      (guess) => guess.name === selectedValue?.value
    )
    if (guessExists) {
      changeCurrentGuess("")
      setSelectedValue(null)
      return
    }
    const response = await createGuess(guessData)
    if (response.numberOfGuesses === null) return

    setGuesses(response.guesses)
    changeCurrentGuess("")
    setSelectedValue(null)

    if (response.gameStatus !== "IN_PROGRESS") {
      setIsGameOver(true)
    }
    if (response.gameStatus === "WON" || response.correct === true) {
      setIsGameWon(true)
      setWinningGuessNumber(response.numberOfGuesses)
    }
    if (response.gameStatus === "IN_PROGRESS") {
      setCurrentHp(response.maxGuesses - response.numberOfGuesses)
    }

    response.targetCard && setTargetCard(response.targetCard)
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
    <div className="text-black w-full flex flex-col gap-2 px-2  max-w-sm sm:max-w-md mx-auto">
      <div className="flex flex-row w-full items-center">
        <HintButton />
        <Select
          options={filteredOptions}
          onInputChange={(e) => setInputValue(e)}
          onChange={handleOnChange}
          placeholder="Type to search cards"
          value={selectedValue}
          className="w-full"
        />
      </div>
      {!isGameOver && (
        <Button
          text="Submit"
          onClick={handleSubmit}
          className="w-full"
          isDisabled={!selectedValue}
          color="green"
        />
      )}
    </div>
  )
}
export default GuessInput
