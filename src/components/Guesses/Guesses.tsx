import { useAppContext } from "context"
import Guess from "./Guess"
import GuessHeader from "./GuessHeader"

const Guesses = () => {
  const appContext = useAppContext()
  const { guesses } = appContext.data

  const headings = [
    "Card",
    "Set",
    "Total mana cost",
    "Power",
    "Toughness",
    "Colors",
    "Rarity",
    "Subtypes",
  ]

  if (guesses.length === 0) return null
  return (
    <div className=" p-4 px-8 mx-auto  max-w-7xl">
      <div className="grid grid-cols-8 gap-2 text-center">
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
