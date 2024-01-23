import Select from "react-select"
const GuessInput = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]
  return (
    <div className="text-black w-full">
      <Select options={options} />
    </div>
  )
}
export default GuessInput
