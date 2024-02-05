import { useState } from "react"
import { IoClose } from "react-icons/io5"

const InfoBox = () => {
  const [showInfo, setShowInfo] = useState<boolean>(true)
  const upArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E")`
  const downArrowSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`

  if (!showInfo) return null
  return (
    <div className="relative white-text-with-outline text-sm sm:text-emerald-50 border border-white  bg-gray-800 rounded-md p-2 max-w-sm sm:max-w-md">
      <button
        onClick={() => setShowInfo(false)}
        className="absolute top-[-5px] right-[-5px] hover:text-gray-300  text-white bg-transparentrounded-full text-sm p-1"
      >
        <IoClose className="w-8 h-8" />
      </button>
      <div className="flex flex-col gap-2">
        <p>The daily card is always a legendary creature</p>
        <hr />
        <div className="flex flex-row gap-5">
          <div className="w-24">
            <div className="w-8 h-8 bg-red-500"></div>Red: None of the values
            match
          </div>
          <div className="w-24">
            <div className="w-8 h-8 bg-yellow-500"></div>Yellow: Some of the
            values match
          </div>
          <div className="w-24">
            <div className="w-8 h-8 bg-green-500"></div>Green: All of the values
            match
          </div>
          <div className="w-24">
            <div
              className="w-8 h-8 "
              style={{
                backgroundImage: upArrowSVG,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            Up arrow: the target value is higher
          </div>
          <div className="w-24">
            <div
              className="w-8 h-8 "
              style={{
                backgroundImage: downArrowSVG,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            Up arrow: the target value is lower
          </div>
        </div>
      </div>
    </div>
  )
}
export default InfoBox
