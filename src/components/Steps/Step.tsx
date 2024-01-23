type StepProps = {
  stepNumber: number
  selectedStep: number
  setSelectedStep: (stepNumber: number) => void
}
const Step = (props: StepProps) => {
  const { stepNumber, selectedStep, setSelectedStep } = props
  return (
    <button
      className="p-3 bg-gray-700 rounded-md"
      onClick={() => setSelectedStep(stepNumber)}
    >
      <b className={`${selectedStep === stepNumber && "text-red-500"}`}>
        {stepNumber}
      </b>
    </button>
  )
}
export default Step
