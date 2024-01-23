import Step from "./Step"
import { Button } from "components/Common"
import { useAppContext } from "context"

const Steps = () => {
  const appContext = useAppContext()
  const { selectedStepNumber } = appContext.data

  const changeStepNumber = () => {
    appContext.setData((prevState) => ({
      ...prevState,
      selectedStepNumber: selectedStepNumber + 1,
    }))
  }
  return (
    <div className="flex flex-row gap-2 py-2">
      <Step stepNumber={1} />
      <Step stepNumber={2} />
      <Step stepNumber={3} />
      <Step stepNumber={4} />
      <Step stepNumber={5} />
      <Step stepNumber={6} />
      <Button
        text="Skip"
        onClick={changeStepNumber}
        className="bg-emerald-700"
        isDisabled={selectedStepNumber >= 6}
      />
    </div>
  )
}
export default Steps
