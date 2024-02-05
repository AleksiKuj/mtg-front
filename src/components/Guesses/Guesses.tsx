import { useAppContext } from "context"
import Guess from "./Guess"
import GuessHeader from "./GuessHeader"

const Guesses = () => {
  const appContext = useAppContext()
  const { guesses } = appContext.data

  const headings = [
    "Card",
    "Set",
    "Mana value",
    "Power",
    "Toughness",
    "Colors",
    "Rarity",
    "Subtypes",
  ]

  if (guesses.length === 0) return null

  const sortedGuesses = guesses.toReversed()
  return (
    <div className="p-4 px-8 mx-auto max-w-full">
      <div className="overflow-x-auto">
        <div className="">
          {/* Headings */}
          <div className="grid grid-cols-8 gap-28 md:gap-24 lg:gap-8 text-center">
            {headings.map((heading, index) => (
              <div className="col-span-1" key={index + heading}>
                <GuessHeader text={heading} />
              </div>
            ))}
          </div>
          {/* Guesses */}
          <div className="grid grid-cols-8 gap-28 md:gap-24 lg:gap-8 text-center ">
            {sortedGuesses.map((guess, index) => (
              <Guess guess={guess} key={guess.name + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guesses
