import { HintType } from "types"
import { mapHintText } from "utils"

type HintProps = {
  hint: HintType
}

const Hint = (props: HintProps) => {
  const { hint } = props
  return <>{mapHintText(hint.givenHint.hintText, hint.givenHint.hintValue)}</>
}
export default Hint
