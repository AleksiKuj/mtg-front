import { useAppContext } from "context"
import AnswerCard from "./AnswerCard"

const Answer = () => {
  const appContext = useAppContext()
  const { isGameWon, isGameOver, winningGuessNumber, targetCard } =
    appContext.data

  if (!isGameOver) return null

  const winString = winningGuessNumber === 1 ? "attempt" : "attempts"

  return (
    <div className="flex flex-col justify-center items-center">
      <AnswerCard />
      <p className="font-bold text-xl">{targetCard?.name}</p>
      {isGameWon ? (
        <p>
          You got it in {winningGuessNumber} {winString}!
        </p>
      ) : (
        <p>Game over! Better luck next time!</p>
      )}
    </div>
  )
}
export default Answer
