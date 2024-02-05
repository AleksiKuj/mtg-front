import { useAppContext } from "context"
import { useEffect, useState } from "react"
import { formatTime } from "utils"

const Timer = () => {
  const appContext = useAppContext()
  const { timeUntilReset } = appContext.data
  const [timeLeft, setTimeLeft] = useState(timeUntilReset)

  useEffect(() => {
    if (!timeUntilReset) return

    setTimeLeft(timeUntilReset)
  }, [timeUntilReset])

  useEffect(() => {
    if (!timeLeft || timeLeft <= 0) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  if (!timeUntilReset) return null

  return (
    <div>
      <p>{formatTime(timeLeft)} Until next card </p>
    </div>
  )
}
export default Timer
