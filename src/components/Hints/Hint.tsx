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
      <div>
        {hint.givenHint.hintValue.split("\n").map((str) => (
          <p key={str}>{str}</p>
        ))}
      </div>
    </>
  )
}
export default Hint
