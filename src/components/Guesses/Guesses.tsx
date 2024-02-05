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
    <div className="p-4 px-8 mx-auto max-w-full text-lg">
      <div className="overflow-x-auto">
        <div>
          {/* Headings */}
          <div className="grid grid-cols-8 gap-x-28  lg:gap-x-8 white-text-with-outline text-center">
            {headings.map((heading, index) => (
              <div className="col-span-1" key={index + heading}>
                <GuessHeader text={heading} />
              </div>
            ))}
          </div>
          {/* Guesses */}
          <div
            style={{ textShadow: "-1px 1px 0 rgba(0, 0, 0, 1)" }}
            className="grid grid-cols-8 gap-x-28 gap-y-4 md:gap-x-24 lg:gap-x-8 text-center font-semibold "
          >
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
