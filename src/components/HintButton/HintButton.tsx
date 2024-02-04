import { Button, Modal } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useState } from "react"
import { RiLightbulbFlashLine } from "react-icons/ri"
import { fetchData } from "services/api"

const HintButton = () => {
  const appContext = useAppContext()
  const { hp, hint } = appContext.data
  const { setHint, setCurrentHp } = useAppContextState(appContext)
  const [isOpen, setIsOpen] = useState(false)

  const getHint = async () => {
    const response = await fetchData("hint")
    console.log(response)
    setHint(response.hint)
    setCurrentHp(response.maxGuesses - response.numberOfGuesses)
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  if (hint || hp.current > 5) return null
  return (
    <>
      <Button onClick={handleOpenModal}>
        <RiLightbulbFlashLine className="text-yellow-500 w-8 h-8" />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation required"
        onConfirm={getHint}
      >
        <p>You can pay 1 life to get a one-time hint.</p>
        <p>The hint will reveal the cards text and flavor text if it exists.</p>
      </Modal>
    </>
  )
}
export default HintButton
