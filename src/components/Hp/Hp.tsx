import { useAppContext } from "context"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"

const Hp = () => {
  const appContext = useAppContext()
  const { hp, isGameOver } = appContext.data

  if (isGameOver) return null
  return (
    <div className="flex">
      {Array.from({ length: hp.max }, (_, index) =>
        index < hp.current ? (
          <IoMdHeart key={index} color="red" className="w-8 h-8" />
        ) : (
          <IoMdHeartEmpty key={index} className=" w-8 h-8" />
        )
      )}
    </div>
  )
}

export default Hp
