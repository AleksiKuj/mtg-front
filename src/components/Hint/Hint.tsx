import { useAppContext } from "context"
import { formatCardText } from "utils"

const Hint = () => {
  const appContext = useAppContext()
  const { hint } = appContext.data
  return (
    <div>
      <h2 className="font-bold text-xl text-center">Hint</h2>
      {formatCardText(hint)}
    </div>
  )
}
export default Hint
