import MainContainer from "components/MainContainer"
import { AppContextProvider } from "context/AppContext"

const App = () => {
  return (
    <AppContextProvider>
      <MainContainer />
    </AppContextProvider>
  )
}

export default App
