import { MainContainer } from "components"
import { AppContextProvider } from "context/AppContext"

const App = () => {
  return (
    <AppContextProvider>
      <MainContainer />
    </AppContextProvider>
  )
}

export default App
