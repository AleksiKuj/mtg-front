type GuessHeaderProps = {
  text: string
}
const GuessHeader = (props: GuessHeaderProps) => {
  return <span className="text-white font-bold w-full">{props.text}</span>
}
export default GuessHeader
