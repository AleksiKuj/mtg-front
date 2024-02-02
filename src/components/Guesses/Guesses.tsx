import { useAppContext } from "context"
import Guess from "./Guess"
import GuessHeader from "./GuessHeader"

const Guesses = () => {
  const appContext = useAppContext()
  const { guesses } = appContext.data

  const headings = [
    "Name",
    "Set",
    "Total mana cost",
    "Power",
    "Toughness",
    "Colors",
    "Rarity",
    "Subtypes",
  ]

  return (
    <div className="bg-gray-800 p-4">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8">
          <div className="flex justify-between items-center">
            {headings.map((heading) => (
              <GuessHeader text={heading} key={heading} />
            ))}
          </div>
        </div>
        {guesses.map((guess, index) => (
          <Guess guess={guess} key={guess.name + index} />
        ))}
      </div>
    </div>
  )
}

export default Guesses
