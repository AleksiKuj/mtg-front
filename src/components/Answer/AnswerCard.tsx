import { useAppContext } from "context"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import { IoInformationCircleOutline } from "react-icons/io5"
import { manaCostToText } from "utils"

const AnswerCard = () => {
  const appContext = useAppContext()
  const { isGameOver, targetCard } = appContext.data

  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  if (!isGameOver) return null

  const handleFlip = () => setIsFlipped(!isFlipped)
  return (
    <div className="w-[265px] h-96">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
      >
        {/* CARD FACE */}
        <div className="h-full">
          <img
            src={targetCard?.imageUrl}
            className="w-full h-full"
            alt={targetCard?.name}
          />
          <div className="absolute right-[-20px] bottom-0  transform -translate-y-1/2 flex flex-col space-y-2">
            <button className="bg-yellow-500 rounded-full p-2 text-white focus:outline-none">
              <IoInformationCircleOutline
                onClick={handleFlip}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
        {/* FLIPSIDE CARD */}
        <div className="bg-gray-800 w-full max-w-h h-[370px] flex-wrap border border-white text-white rounded overflow-y-auto overflow-x-hidden shadow-lg">
          <div className="p-1">
            <div className="font-bold text-xl">{targetCard?.name}</div>
          </div>
          <div className="p-1">
            <div className="font-bold">Set</div>
            <div className="flex space-x-2">{targetCard?.setName}</div>
          </div>
          <div className="p-1">
            <div className="font-bold mb-2">Mana cost</div>
            <div className="flex flex-row gap-1 items-center">
              {targetCard && manaCostToText(targetCard?.manaCost)}
            </div>
          </div>
          <div className="p-1">
            <div className="font-bold">Type</div>
            {targetCard?.type}
          </div>
          <div className="p-1">
            <div className="font-bold">Stats</div>
            <p>{`${targetCard?.power + "/" + targetCard?.toughness}`}</p>
          </div>
          <div className="p-1">
            <div className="font-bold">Rarity</div>
            <p>{targetCard?.rarity}</p>
          </div>
          <div className="absolute right-[-20px] bottom-0 transform -translate-y-1/2 flex flex-col space-y-2">
            <button className="bg-yellow-500 rounded-full p-2 text-white focus:outline-none">
              <IoMdArrowDroprightCircle
                onClick={handleFlip}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
export default AnswerCard
