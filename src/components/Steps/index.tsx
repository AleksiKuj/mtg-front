import { useState } from "react"
import Step from "./Step"
import { Button } from "components/Common"

const Steps = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1)
  return (
    <div className="flex flex-row gap-2 py-2">
      <Step
        stepNumber={1}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Step
        stepNumber={2}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Step
        stepNumber={3}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Step
        stepNumber={4}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Step
        stepNumber={5}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Step
        stepNumber={6}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Button
        text="Skip"
        onClick={() => setSelectedStep(selectedStep + 1)}
        className="bg-emerald-700"
      />
    </div>
  )
}
export default Steps
