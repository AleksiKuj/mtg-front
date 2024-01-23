import { IoClose, IoCheckmark } from "react-icons/io5"
type GuessProps = {
  text: string
  isCorrect: boolean
}
const Guess = (props: GuessProps) => {
  const { text, isCorrect } = props

  return (
    <div className="border border-slate-200 rounded-md w-full p-2 flex items-center flex-row">
      <span>{isCorrect ? <IoCheckmark /> : <IoClose />}</span>
      <span> {text}</span>
    </div>
  )
}
export default Guess
