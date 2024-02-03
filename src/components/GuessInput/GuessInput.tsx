import { Button, HintButton } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useMemo, useState } from "react"
import { RiLightbulbFlashLine } from "react-icons/ri"
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
    setStepNumber,
    setGuesses,
    setWinningGuessNumber,
    decrementHp,
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
    const response = await createGuess(guessData)
    if (response.numberOfGuesses === null) return
    console.log(response)

    setGuesses(response.guesses)
    // if (
    //   response.numberOfGuesses >= MAX_GUESSES ||
    //   response.gameStatus === "WON"
    // ) {
    //   setIsGameOver(true)
    // }

    // if (response.gameStatus === "WON") {
    //   setIsGameWon(true)
    //   setWinningGuessNumber(response.numberOfGuesses)
    // }

    changeCurrentGuess("")
    setSelectedValue(null)
    decrementHp()
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
    <div className="text-black w-full flex flex-col gap-2 max-w-md mx-auto">
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
