type GuessHeaderProps = {
  text: string
}
const GuessHeader = (props: GuessHeaderProps) => {
  return <span className="text-white font-bold">{props.text}</span>
}
export default GuessHeader
