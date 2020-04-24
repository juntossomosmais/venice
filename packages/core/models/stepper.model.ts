interface Steps {
  title: string
  subtitle?: string
  completed?: boolean
}

export interface IStepper {
  steps: Array<Steps>
}
