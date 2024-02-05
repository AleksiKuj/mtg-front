import { GuessType } from "types"
import { colorsToIcons } from "utils"

type GuessProps = {
  guess: GuessType
}
const Guess = (props: GuessProps) => {
  const { guess } = props
  const {
    name,
    colors,
    rarity,
    setName,
    power,
    toughness,
    imageUrl,
    cmc,
    subtypes,
    attributeCorrectness,
    correct,
  } = guess

  const getColorClass = (correctness: string) => {
    switch (correctness) {
      case "wrong":
        return "bg-red-700"
      case "higher":
        return "bg-red-700"
      case "lower":
        return "bg-red-700"
      case "partial":
        return "bg-yellow-600"
      case "correct":
        return "bg-green-600"
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
  const upArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231b1b1c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E")`
  const downArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231b1b1c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`

  const cellClasses =
    "col-span-1 w-28 px-2 md:w-28 lg:w-36 shadow-sm  border border-white rounded-md"
  return (
    <>
      <div
        className={`${cellClasses} px-0 ${
          correct ? "bg-green-600" : "bg-red-700"
        }`}
      >
        <img src={imageUrl} alt={name} />
      </div>
      <div
        className={`${cellClasses} ${getColorClass(attributeCorrectness.set)}`}
      >
        {setName}
      </div>
      <div
        className={`${cellClasses} ${getColorClass(attributeCorrectness.cmc)}`}
      >
        {cmc}
      </div>
      <div
        className={`${cellClasses} ${getColorClass(
          attributeCorrectness.power
        )}`}
        style={{
          backgroundImage: getArrowBackground(attributeCorrectness.power),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {power}
      </div>
      <div
        className={`${cellClasses} ${getColorClass(
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
        className={`${cellClasses} ${getColorClass(
          attributeCorrectness.colors
        )}`}
      >
        <div className="flex flex-row justify-center items-center h-full gap-1">
          {colorsToIcons(colors)}
        </div>
      </div>
      <div
        className={`${cellClasses} ${getColorClass(
          attributeCorrectness.rarity
        )}`}
      >
        {rarity}
      </div>
      <div
        className={`${cellClasses} ${getColorClass(
          attributeCorrectness.subtypes
        )}`}
      >
        {subtypes.join(", ")}
      </div>
    </>
  )
}
export default Guess
