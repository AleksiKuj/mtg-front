import React, { useMemo, useState, ReactNode } from "react"
import { AppProps, defaultAppProps } from "types"

interface AppProviderProps {
  children: ReactNode
}

export type AppContextType = {
  data: AppProps
  setData: React.Dispatch<React.SetStateAction<AppProps>>
}

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
)

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [data, setData] = useState<AppProps>(defaultAppProps)
  const value = useMemo(() => ({ data, setData }), [data, setData])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const appContext = React.useContext(AppContext)

  return appContext
}
