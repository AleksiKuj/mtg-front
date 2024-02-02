import { GuessType } from "types"

type GuessProps = {
  guess: GuessType
}
const Guess = (props: GuessProps) => {
  const { guess } = props
  const {
    name,
    manaCost,
    colors,
    rarity,
    setName,
    power,
    toughness,
    imageUrl,
    cmc,
    subtypes,
    attributeCorrectness,
  } = guess

  const getColorClass = (correctness: string) => {
    switch (correctness) {
      case "wrong":
        return "bg-red-500"
      case "higher":
        return "bg-red-500"
      case "lower":
        return "bg-red-500"
      case "partial":
        return "bg-yellow-300"
      case "correct":
        return "bg-green-400"
      default:
        return ""
    }
  }
  const getArrowBackground = (correctness: string) => {
    switch (correctness) {
      case "higher":
        return upArrowSVG
      case "lower":
        return downArrowSVG
      default:
        return ""
    }
  }
  const upArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E")`
  const downArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`

  return (
    <>
      <div className="col-span-1 bg-red-500">{name}</div>
      <div className={`col-span-1 ${getColorClass(attributeCorrectness.set)}`}>
        {setName}
      </div>
      <div className={`col-span-1 ${getColorClass(attributeCorrectness.cmc)}`}>
        {cmc}
      </div>
      <div
        className={`col-span-1 ${getColorClass(attributeCorrectness.power)}`}
        style={{
          backgroundImage: getArrowBackground(attributeCorrectness.power),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {power}
      </div>
      <div
        className={`col-span-1 ${getColorClass(
          attributeCorrectness.toughness
        )}`}
        style={{
          backgroundImage: getArrowBackground(attributeCorrectness.toughness),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {toughness}
      </div>
      <div
        className={`col-span-1 ${getColorClass(attributeCorrectness.colors)}`}
      >
        {colors.join(", ")}
      </div>
      <div
        className={`col-span-1 ${getColorClass(attributeCorrectness.rarity)}`}
      >
        {rarity}
      </div>
      <div
        className={`col-span-1 ${getColorClass(attributeCorrectness.subtypes)}`}
      >
        {subtypes.join(", ")}
      </div>
    </>
  )
}
export default Guess
