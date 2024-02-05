import { useAppContext } from "context"
import { formatCardText } from "utils"

const Hint = () => {
  const appContext = useAppContext()
  const { hint, isGameOver } = appContext.data

  if (!hint || isGameOver) return null

  return (
    <div className="shadow-sm white-text-with-outline">
      <h2 className="font-bold text-xl text-center">Hint</h2>
      <div className="font-semibold">{formatCardText(hint)}</div>
    </div>
  )
}
export default Hint
