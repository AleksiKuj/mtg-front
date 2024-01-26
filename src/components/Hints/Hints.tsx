import { useAppContext } from "context"
import Hint from "./Hint"

const Hints = () => {
  const appContext = useAppContext()
  const { hints, selectedStepNumber } = appContext.data

  const currentHint = hints?.find(
    (hint) => hint.hintNumber + 1 === selectedStepNumber
  )
  return (
    <div className="border-red-500 border w-full h-96">
      {currentHint ? (
        <Hint hint={currentHint} />
      ) : (
        <p>No hints available for this step.</p>
      )}
    </div>
  )
}
export default Hints
