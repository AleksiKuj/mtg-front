import { Button } from "components"
import { useAppContext } from "context"

type StepProps = {
  stepNumber: number
}
const Step = (props: StepProps) => {
  const { stepNumber } = props
  const appContext = useAppContext()
  const {
    selectedStepNumber,
    numberOfGuesses,
    isGameOver,
    winningGuessNumber,
  } = appContext.data

  const changeStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: stepNumber,
    }))
  }

  return (
    <Button
      className={`${
        winningGuessNumber === stepNumber ? "bg-green-700" : "bg-gray-700"
      }`}
      onClick={changeStepNumber}
      isDisabled={stepNumber > numberOfGuesses + 1 && !isGameOver}
    >
      <b className={`${selectedStepNumber === stepNumber && "text-red-500"}`}>
        {stepNumber}
      </b>
    </Button>
  )
}
export default Step
