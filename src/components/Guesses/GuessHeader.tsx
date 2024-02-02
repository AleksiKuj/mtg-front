type GuessHeaderProps = {
  text: string
}
const GuessHeader = (props: GuessHeaderProps) => {
  return <h1 className="text-white text-xl">{props.text}</h1>
}
export default GuessHeader
