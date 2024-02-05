import { Modal } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useState } from "react"
import { GiTreasureMap } from "react-icons/gi"
import { fetchData } from "services/api"

const HintButton = () => {
  const appContext = useAppContext()
  const { hp, hint } = appContext.data
  const { setHint, setCurrentHp } = useAppContextState(appContext)
  const [isOpen, setIsOpen] = useState(false)

  const getHint = async () => {
    const response = await fetchData("hint")
    setHint(response.hint)
    setCurrentHp(response.maxGuesses - response.numberOfGuesses)
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  if (hint || hp.current > 5 || hp.current === 1) return null
  return (
    <>
      <button onClick={handleOpenModal}>
        <GiTreasureMap className="text-amber-500 w-10 h-10 " />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation required"
        onConfirm={getHint}
      >
        <p>
          You can pay <b>1 life</b> to get a one-time hint.
        </p>
        <p>
          The hint will reveal the cards text and flavor text if it exists{" "}
          <b>but you will lose one life</b>.
        </p>
      </Modal>
    </>
  )
}
export default HintButton
