import { useAppContext } from "context"

type StepProps = {
  stepNumber: number
}
const Step = (props: StepProps) => {
  const { stepNumber } = props
  const appContext = useAppContext()
  const { selectedStepNumber } = appContext.data

  const changeStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: stepNumber,
    }))
  }

  return (
    <button className="p-3 bg-gray-700 rounded-md" onClick={changeStepNumber}>
      <b className={`${selectedStepNumber === stepNumber && "text-red-500"}`}>
        {stepNumber}
      </b>
    </button>
  )
}
export default Step
