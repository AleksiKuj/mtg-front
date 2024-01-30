import { Header, Hints, Steps, GuessInput, Guesses, Answer } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useEffect } from "react"
import { fetchData } from "services/api"

const MainContainer = () => {
  const appContext = useAppContext()
  const { addHint, setCardList } = useAppContextState(appContext)

  useEffect(() => {
    const initialize = async () => {
      const response = await fetchData("/initialize")
      addHint(response.firstHint)
      setCardList(response.searchCardsResponse.cards)
    }
    initialize()
  }, [])

  return (
    <div className="bg-blue-950 h-screen flex-col flex-grow ">
      <div className=" mx-auto max-w-sm sm:max-w-md md:max-w-lg gap-2 flex flex-col  items-center text-zinc-100">
        <Header />
        <Hints />
        <Steps />
        <Answer />
        <GuessInput />
        <Guesses />
      </div>
    </div>
  )
}
export default MainContainer
