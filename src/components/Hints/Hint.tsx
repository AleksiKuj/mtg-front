import { HintType } from "types"

type HintProps = {
  hint: HintType
}

const Hint = (props: HintProps) => {
  const { hint } = props
  return (
    <>
      <p>{hint.givenHint.hintText}</p>
      {hint.givenHint.hintText === "imageUrl" ? (
        <img alt="Card face" src={hint.givenHint.hintValue} />
      ) : (
        <div>
          {hint.givenHint.hintValue.split("\n").map((str) => (
            <p key={str}>{str}</p>
          ))}
        </div>
      )}
    </>
  )
}
export default Hint
