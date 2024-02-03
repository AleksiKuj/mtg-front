import { Header, GuessInput, Guesses, Answer } from "components"
import { Hp } from "components/Hp"
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
      <div className="gap-2 flex flex-col items-center  text-zinc-100 ">
        <Header />
        {/* <Answer /> */}
        <GuessInput />
        <Hp />
        <Guesses />
      </div>
    </div>
  )
}
export default MainContainer
