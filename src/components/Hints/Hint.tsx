import { HintType } from "types"

type HintProps = {
  hint: HintType
}

const Hint = (props: HintProps) => {
  const { hint } = props
  return (
    <>
      <p>{hint.hintNumber}</p>
      <p>{hint.givenHint.hintText}</p>
      <p>{hint.givenHint.hintValue}</p>
    </>
  )
}
export default Hint
