import { IoClose, IoCheckmark } from "react-icons/io5"
type GuessProps = {
  text: string
  isCorrect: boolean
}
const Guess = (props: GuessProps) => {
  const { text, isCorrect } = props

  return (
    <div className="border border-slate-200 rounded-md w-full p-2 flex items-center flex-row">
      <span>
        {isCorrect ? (
          <IoCheckmark className="text-green-500 w-8 h-8" />
        ) : (
          <IoClose className="text-red-500 w-8 h-8" />
        )}
      </span>
      <span>{!text ? "Skipped!" : text}</span>
    </div>
  )
}
export default Guess
