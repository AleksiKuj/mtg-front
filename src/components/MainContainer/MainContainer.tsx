import { Header, GuessInput, Guesses, Answer } from "components"
import { useAppContext } from "context"
import useAppContextState from "context/appContextHelpers"
import { useEffect } from "react"
import { fetchData } from "services/api"

const MainContainer = () => {
  const appContext = useAppContext()
  const { setCardList } = useAppContextState(appContext)

  useEffect(() => {
    const initialize = async () => {
      const response = await fetchData("/initialize")
      setCardList(response.searchCardsResponse.cards)
    }
    initialize()
  }, [])

  return (
    <div className="bg-blue-950 h-screen flex-col flex-grow ">
      <div className="gap-2 flex flex-col  text-zinc-100">
        <Header />
        <Answer />
        <GuessInput />
        <Guesses />
      </div>
    </div>
  )
}
export default MainContainer
