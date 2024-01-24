import { Header, Hint, Steps, GuessInput, Guesses, Button } from "components"

const MainContainer = () => {
  return (
    <div className="bg-blue-950 h-screen flex-col flex-grow ">
      <div className=" mx-auto max-w-sm sm:max-w-md md:max-w-lg gap-2 flex flex-col  items-center text-zinc-100">
        <Header />
        <Hint />
        <Steps />
        <GuessInput />
        <Button
          text="Submit"
          onClick={() => console.log("Submit")}
          className="bg-emerald-800 w-full"
        />
        <Guesses />
      </div>
    </div>
  )
}
export default MainContainer
