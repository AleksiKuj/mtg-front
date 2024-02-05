import {
  Header,
  GuessInput,
  Guesses,
  Hp,
  Answer,
  Hint,
  InfoBox,
  Timer,
} from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useEffect } from "react"
import { fetchData } from "services/api"
import bg from "assets/bg.png"
import "App.css"

const MainContainer = () => {
  const appContext = useAppContext()
  const { setCardList, setHp, setMaxGuesses, setTimeUntilReset } =
    useAppContextState(appContext)

  useEffect(() => {
    const initialize = async () => {
      const response = await fetchData("/initialize")
      setCardList(response.searchCardsResponse.cards)
      setHp(response.maxGuesses)
      setMaxGuesses(response.maxGuesses)
      setTimeUntilReset(response.timeUntilReset)
    }
    initialize()
  }, [])

  return (
    <div
      className=" min-h-[100vh] flex-col tracking-wider"
      style={{
        backgroundImage: `url(${bg}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="gap-2 flex flex-col items-center  text-zinc-100">
        <Header />
        <InfoBox />
        <Timer />
        <Answer />
        <GuessInput />
        <Hp />
        <Hint />
        <Guesses />
      </div>
    </div>
  )
}
export default MainContainer
