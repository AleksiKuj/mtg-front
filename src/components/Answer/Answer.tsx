import { useAppContext } from "context"

const Answer = () => {
  const appContext = useAppContext()
  const { isGameWon, isGameOver, winningGuessNumber } = appContext.data
  if (!isGameOver) return null
  const winString = winningGuessNumber === 1 ? "guess" : "guesses"
  return (
    <>
      {isGameWon ? (
        <p>
          You nailed it in {winningGuessNumber} {winString}!
        </p>
      ) : (
        <p>Better luck next time</p>
      )}
    </>
  )
}
export default Answer
