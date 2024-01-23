export interface AppProps {
  selectedStepNumber: number
}

export const defaultAppProps: AppProps = {
  selectedStepNumber: 1,
}

export type GuessRequest = {
  name: string
}
