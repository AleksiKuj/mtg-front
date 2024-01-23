import Guess from "./Guess"

const Guesses = () => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Guess text="guess1" isCorrect={false} />
      <Guess text="guess2" isCorrect={true} />
    </div>
  )
}

export default Guesses
