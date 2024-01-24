import { useAppContext } from "context"
import Guess from "./Guess"

const Guesses = () => {
  const appContext = useAppContext()
  const { guesses } = appContext.data

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {guesses.map((guess, index) => (
        <Guess
          text={guess.cardName}
          isCorrect={guess.isCorrect}
          key={guess.cardName + index}
        />
      ))}
    </div>
  )
}

export default Guesses
